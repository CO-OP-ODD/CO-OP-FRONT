import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],

    /* Path Aliases */
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@styles": path.resolve(__dirname, "./src/styles"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@types": path.resolve(__dirname, "./src/types"),
            "@data": path.resolve(__dirname, "./src/data"),
            "@libs": path.resolve(__dirname, "./src/libs"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@icons": path.resolve(__dirname, "./src/components/icons"),
            "@templates": path.resolve(__dirname, "./src/components/templates"),
            "@pages": path.resolve(__dirname, "./src/components/pages"),
        }
    }
})
