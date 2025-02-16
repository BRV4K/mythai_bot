import { defineConfig } from 'vite';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  server: {
    host: "127.0.0.1",
    allowedHosts: ["m2l2kn-188-234-194-146.ru.tuna.am"],
    plugins: [
      nodePolyfills(),
      NodeGlobalsPolyfillPlugin({
        buffer: true
      })
    ]
  }
});
