import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const stripUnsplashCookiesPlugin = () => ({
  name: 'strip-unsplash-cookies',
  configureServer(server) {
    server.middlewares.use('/unsplash-img', async (req, res) => {
      try {
        const targetUrl = `https://images.unsplash.com${req.url}`;
        const response = await fetch(targetUrl);
        res.setHeader('Content-Type', response.headers.get('content-type') || 'image/webp');
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        const buffer = await response.arrayBuffer();
        res.end(Buffer.from(buffer));
      } catch (err) {
        res.statusCode = 500;
        res.end('Error fetching image');
      }
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use('/unsplash-img', async (req, res) => {
      try {
        const targetUrl = `https://images.unsplash.com${req.url}`;
        const response = await fetch(targetUrl);
        res.setHeader('Content-Type', response.headers.get('content-type') || 'image/webp');
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        const buffer = await response.arrayBuffer();
        res.end(Buffer.from(buffer));
      } catch (err) {
        res.statusCode = 500;
        res.end('Error fetching image');
      }
    });
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), stripUnsplashCookiesPlugin()],
  server: {
    port: 3000,
    open: true
  },
  preview: {
    port: 3000,
    open: true
  },
  esbuild: {
    legalComments: 'none'
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    cssMinify: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom') || id.includes('react') || id.includes('react-dom')) {
              return 'vendor-core';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            return 'vendor-utils';
          }
        }
      }
    }
  }
})
