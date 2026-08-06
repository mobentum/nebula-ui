import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./index.ts'],
  dts: true,
  external: ['react', 'react-dom', 'react-is', 'recharts', '@mobentum/nebula-ui'],
  clean: false,
});
