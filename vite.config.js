import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://brijeshpatolia.github.io/hangman/', // Replace 'repository-name' with your actual repo name
});
