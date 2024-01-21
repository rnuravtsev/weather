import { defineConfig } from 'vite'
import * as path from "path";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: './docs',
        sourcemap: true
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use '@assets/styles/mixins.scss' as *;`,
            },
        },
    },
    resolve: {
        alias: {
            '@app': path.join(__dirname, './src/app'),
            '@assets': path.join(__dirname, './src/assets'),
            '@module': path.join(__dirname, './src/module'),
            '@shared': path.join(__dirname, './src/shared'),
        }
    }
})
