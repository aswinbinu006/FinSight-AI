import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    // Firebase ESM needs tslib resolved at project level
    dedupe: ['tslib']
  },
  optimizeDeps: {
    include: ['tslib']
  },
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/') || id.includes('node_modules/react-router')) {
            return 'vendor';
          }
          if (id.includes('node_modules/firebase') || id.includes('node_modules/@firebase') || id.includes('node_modules/tslib')) {
            return 'firebase';
          }
          if (id.includes('node_modules/gsap') || id.includes('node_modules/framer-motion') || id.includes('node_modules/lenis') || id.includes('node_modules/motion')) {
            return 'animation';
          }
        }
      }
    }
  }
})
