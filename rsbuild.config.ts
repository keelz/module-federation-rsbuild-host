import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

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
          shared: ['react', 'react-dom'],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
