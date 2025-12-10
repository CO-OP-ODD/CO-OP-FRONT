import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // reference : (link)[https://velog.io/@ckdwns9121/CRA에서-Vite로-마이그레이션-SVG-import-에러-원인과-해결-과정]
        svgr()
    ],

    /* Path Aliases */
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@styles": path.resolve(__dirname, "./src/styles"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@/components": path.resolve(__dirname, "./src/components/ui"),
            "@types": path.resolve(__dirname, "./src/types"),
            "@data": path.resolve(__dirname, "./src/data"),
            "@lib": path.resolve(__dirname, "./src/lib"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@icons": path.resolve(__dirname, "./src/components/icons"),
            "@templates": path.resolve(__dirname, "./src/components/templates"),
            "@pages": path.resolve(__dirname, "./src/components/pages"),
        }
    }
})
