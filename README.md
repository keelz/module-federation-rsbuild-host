[RFC-2119](https://www.rfc-editor.org/rfc/rfc2119)

# Rsbuild Module Federation 2.0 Project (Host)

This project is a Host MFE that implements the Module Federation pattern described within the [Quick Start Guide](https://module-federation.io/guide/start/quick-start.html) from the Module Federation documentation.

- [Rsbuild Module Federation 2.0 Project (Host)](#rsbuild-module-federation-20-project-host)
  - [Install, Run and Build](#install-run-and-build)
  - [Development Environment](#development-environment)
  - [General Configuration](#general-configuration)
    - [Update tsconfig.json](#update-tsconfigjson)
    - [Add `@module-federation/enhanced` npm module](#add-module-federationenhanced-npm-module)
    - [Refactor `./src/index.tsx` to asynchronous](#refactor-srcindextsx-to-asynchronous)
    - [Implement `@module-federation/enhanced/rspack` plugin](#implement-module-federationenhancedrspack-plugin)
  - [Gotchas](#gotchas)
- [RTFM](#rtfm)
- [Glossary of Terms](#glossary-of-terms)
  - [Module Federation](#module-federation)
  - [Producer (Remote)](#producer-remote)
  - [Consumer (Host)](#consumer-host)
  - [Micro-frontend (MFE)](#micro-frontend-mfe)
  - [Bundler](#bundler)

## Install, Run and Build

```bash
pnpm i
pnpm dev
pnpm build
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

### Refactor `./src/index.tsx` to asynchronous

After experiencing several out-of-the-box failures with implementing Module Federation, I found that implementing a standard `index.ts` file with React that loads the React library and the root `<App />` into the root element of the DOM is not supported.

To resolve this issue, which appears to be some sort of race condition, we abstract the normal `index.ts` implementation to `bootstrap.ts` and replace the `index.ts` implementation with an import statement.

./src/index.ts

```typescript
// Move src/index.tsx to src/bootstrap.tsx file
// src/index.tsx SHOULD be renamed to src/index.ts
import('./bootstrap')

// src/bootstrap.tsx
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

## Gotchas

1. This project is a Module Federation consumer. [READ THE DOCS](https://module-federation.io/guide/start/index.html).
2. Run the application in localdev BEFORE trying to implement anything new provided by a remote MFE.
3. Make sure the project remote dependencies are up and available before running the host MFE local development environment.

# RTFM

- [Module Federation](https://module-federation.io/guide/start/index.html)
- [Rspack](https://rspack.dev/guide/start/introduction)
- [Rsbuild](https://rsbuild.dev/guide/start/index)

# Glossary of Terms

## Module Federation

Module Federation (MF) is an architectural pattern for partitioning JavaScript applications, similar to microservices on the server side. It allows you to share code and resources between multiple JavaScript applications (or micro frontends). If an application using federated modules lacks the dependencies required by the federated code, the missing dependencies will be downloaded from the build source or a peer that is able to share it.

This enables the creation of micro-frontend style applications where multiple systems can share code and update dynamically without the need to rebuild the entire application.

This also enabled a wider set of use cases on the server side, as federation operates universally, it has several dynamic backend use cases.

## Producer (Remote)

An application that exposes other modules to be consumed by other JavaScript applications through the Module Federation build plugin with the exposes configuration is referred to as a Provider (Producer) in Module Federation. A Producer can also act as a Consumer.

## Consumer (Host)

An application that consumes modules from other Producers through the Module Federation build plugin with the remotes configuration is referred to as a Consumer (Consumer). A Consumer can also act as a Producer.

## Micro-frontend (MFE)

Micro-frontend (MFE) is an architectural style similar to microservices, where a cohesive single product is composed of multiple independently delivered frontend applications. It breaks down a frontend application into smaller, simpler applications that can be independently developed, tested, and deployed, while still appearing as a single product to the user.

It primarily addresses two issues:

The increasing size and maintenance difficulty of applications as they evolve through iterations.
The low efficiency of cross-team or cross-department collaboration in project development.

## Bundler

Refers to module bundling tools such as Rspack, Webpack.

The main goal of a bundler is to package JavaScript, CSS, and other files together. The packaged files can be used in browsers, Node.js, and other environments. When a Bundler processes a web application, it constructs a dependency graph that includes all the modules requires by the application and then packages all modules into one or more bundles.