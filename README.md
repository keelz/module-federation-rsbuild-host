
# Rsbuild Module Federation 2.0 Project (Host)

- [Rsbuild Module Federation 2.0 Project (Host)](#rsbuild-module-federation-20-project-host)
  - [Install](#install)
  - [Development Environment](#development-environment)
  - [General Configuration](#general-configuration)
    - [Update tsconfig.json](#update-tsconfigjson)
    - [Add `@module-federation/enhanced` npm module](#add-module-federationenhanced-npm-module)
    - [Refactor `./src/index.tsx`](#refactor-srcindextsx)
    - [Implement `@module-federation/enhanced/rspack` plugin](#implement-module-federationenhancedrspack-plugin)

## Install

```bash
pnpm i
```

## Development Environment

This project provides the source code for the host (consumer) application. Before starting the host development server you need to make sure that the project remotes are up and running. This project consumes two hosts; `remote_one` and `remote_two`. The remote servers MUST be up and available on the local system otherwise this application will fail to render.

| Server | Port |
| ----------- | ----------- |
| host | localhost:3000 |
| remote_one | localhost:3001 |
| remote_two | localhost:3002 |

## General Configuration

This project is Micro-Frontend host application that implements [Module Federation 2.0](https://module-federation.io/guide/start/index.html) patterns. Rspack and Rsbuild provide native support for Module Federation but the setup requires a little work and has very distinct differences froma a vanilla Rsbuild project.

### Update tsconfig.json

module federation with rspack/rsbuild automatically writes types from remotes to the `./@mf-types` directory. We need to update the `tsconfig.jsion` file to recognize this for our dev/build environments.

```json
{
  "compilerOptions": {
    ...
    "paths": {
      "*": ["./@mf-types/*"]
    }
  }
}
```

### Add `@module-federation/enhanced` npm module

[Module Federation v2.0](https://rsbuild.dev/guide/advanced/module-federation#module-federation-v20) requires the `@module-federation/enhanced` plugin so we add it to the project as a development dependency with pnpm.

```bash
pnpm add -D @module-federation/enhanced
```

### Refactor `./src/index.tsx`

After experiencing several out-of-the-box failures with implementing Module Federation, I found that implementing a standard `index.ts` file with React that loads the React library and the root `<App />` into the root element of the DOM is not supported.

To resolve this issue, which appears to be some sort of race condition, we abstract the normal `index.ts` implementation to `bootstrap.ts` and replace the `index.ts` implementation with an import statement.

./src/index.ts

```typescript
import('./bootstrap')
```

./src/bootstrap.tsx (new file)

```typescript
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
```

### Implement `@module-federation/enhanced/rspack` plugin

To implement [Module Federation v2.0 with rspack](https://module-federation.io/guide/basic/rspack.html) we modify the `./rsbuild.config.ts` file.

- import `ModuleFederationPlugin` from `@module-federation/enhanced/rspack`
- extend the `rsbuild` configuration

Our implementation is a Micro-Frontend consumer and will run on port 3000 in the development environment. We add this configuration to the rsbuild configuration that is exported by defining the `server` object. Refer to the rsbuild [server.host](https://rsbuild.dev/config/server/host) documentation.

To implement the `@module-federation/enhanced` plugin we define the `tools:rspack` object of the rsbuild configuration. Refer to the rsbuild [tools.rspack](https://rsbuild.dev/config/tools/rspack) documentation.

Our implementation includes two remotes and shares `refact` and `react-dom`. These are Module Federation concepts explained in detail within the rsbuild [moduleFederation.options](https://rsbuild.dev/config/module-federation/options) documentation.

```typescript
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced';

export default defineConfig({
  server: { port: 3000 },
  tools: {
    rspack: (_, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'host',
          remotes: {
            remote_one: 'remote_one@http://localhost:3001/mf-manifest.json',
            remote_two: 'remote_two@http://localhost:3002/mf-manifest.json',
          },
          shared: ['react', 'react-dom'],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
```
