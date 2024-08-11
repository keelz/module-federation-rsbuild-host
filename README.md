# post-rsbuild configuration

## update tsconfig.json

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

## Add `@module-federation/enhanced` npm module

[Module Federation v2.0](https://rsbuild.dev/guide/advanced/module-federation#module-federation-v20) requires the `@module-federation/enhanced` plugin so we add it to the project as a development dependency with pnpm.

```bash
pnpm add -D @module-federation/enhanced
```

## Refactor `./src/index.tsx`

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

# Rsbuild Project

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get Started

Start the dev server:

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```
