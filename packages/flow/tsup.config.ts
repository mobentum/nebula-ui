import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./index.ts'],
  dts: true,
  external: ['react', 'react-dom', '@xyflow/react', '@mobentum/nebula-ui'],
  clean: false,
});
