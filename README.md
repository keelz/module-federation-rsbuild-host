# post-install config

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
