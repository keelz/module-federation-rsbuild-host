import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

const getRemotes = () => {
  if (process.env.REMOTES) {
    console.warn('REMOTES FROM ENV');
    return JSON.parse(process.env.REMOTES);
  }
  console.warn('REMOTES FROM DEV');
  return require('./remotes.dev.json');
};

export default defineConfig({
  server: { port: 3000 },
  tools: {
    rspack: (_, { appendPlugins }) => {
      appendPlugins([
        new ModuleFederationPlugin({
          name: 'host',
          remotes: getRemotes(),
          shared: ['react', 'react-dom'],
        }),
      ]);
    },
  },
  plugins: [pluginReact()],
});
