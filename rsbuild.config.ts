import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

const dependencies = require('./package.json').dependencies;

const getRemotes = (envRemotes: string | undefined) => {
  if (envRemotes !== undefined) {
    console.warn('REMOTES FROM ENV');
    return JSON.parse(envRemotes);
  }
  console.warn('REMOTES FROM DEV');
  return require('./remotes.dev.json');
};

export default defineConfig({
  html: {
    title: 'My App',
    tags: [
      {
        tag: 'link',
        attrs: {
          rel: 'preconnect',
          hreft: 'https://fonts.googleapis.com',
        },
      },
      {
        tag: 'link',
        attrs: {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true,
        },
      },
      {
        tag: 'link',
        attrs: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
        },
      },
      {
        tag: 'link',
        attrs: {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      },
    ],
  },
  server: { port: 3000 },
  tools: {
    rspack: (_, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'host',
          remotes: getRemotes(process.env.REMOTES),
          shared: {
            ...dependencies,
            'react': {
              singleton: true,
              requiredVersion: dependencies['react'],
            },
            'react-dom': {
              singleton: true,
              requiredVersion: dependencies['react-dom'],
            },
            '@emotion/react': {
              eager: true,
              singleton: true,
              requiredVersion: dependencies['@emotion/react'],
            },
            '@mui/material': {
              singleton: true,
              requiredVersion: dependencies['@mui/material'],
            },
          },
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
