import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite';
import AlpineVitePlugin from './alpine-vite-plugin.js'
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    plugins: [
        AlpineVitePlugin(),
        tailwindcss(),
        handlebars({
            partialDirectory: [
                resolve(__dirname, 'app/partials'),
                resolve(__dirname, 'app/components'),
            ],
        }),
    ],
})