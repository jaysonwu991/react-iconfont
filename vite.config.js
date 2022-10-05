import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // sourcemap: true,
    outDir: path.resolve(__dirname, './lib'),
    lib: {
      name: 'IconFont',
      fileName: (format) => `iconfont.${format}.js`,
      entry: path.resolve(__dirname, './src/index.tsx'),
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
