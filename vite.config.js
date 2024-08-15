import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
          output: {
            // Cambia la estructura de salida aquí
            assetFileNames: (assetInfo) => {
              if (assetInfo.name.endsWith('.css')) {
                return 'css/[name]-[hash][extname]';
              }
              return '[name]-[hash][extname]';
            }
          }
        }
      }

});