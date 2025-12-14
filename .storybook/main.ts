import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y'
  ],
  framework: '@storybook/vue3-vite',
  viteFinal: async (config) => {
    // Handle npm link symlinks properly
    config.resolve = {
      ...config.resolve,
      preserveSymlinks: true
    };
    // Exclude story-ui from dependency optimization to avoid CSS import issues
    config.optimizeDeps = {
      ...config.optimizeDeps,
      exclude: [
        ...(config.optimizeDeps?.exclude || []),
        '@tpitre/story-ui',
        '@tpitre/story-ui/panel'
      ],
      // Don't process CSS in pre-bundled deps
      esbuildOptions: {
        ...config.optimizeDeps?.esbuildOptions,
        loader: {
          ...config.optimizeDeps?.esbuildOptions?.loader,
          '.css': 'empty'
        }
      }
    };
    // Tell Vite to process this package through its normal pipeline
    config.ssr = {
      ...config.ssr,
      noExternal: [...(Array.isArray(config.ssr?.noExternal) ? config.ssr.noExternal : []), '@tpitre/story-ui']
    };
    return config;
  }
};

export default config;
