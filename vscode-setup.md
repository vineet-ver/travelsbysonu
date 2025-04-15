# VS Code Setup Instructions

Follow these steps to properly set up this project in VS Code:

## 1. Install Dependencies

First, make sure you have Node.js and npm installed. Then run:

```bash
npm install
```

## 2. Create a Local Vite Configuration

Create a file named `vite.config.local.ts` with the following content:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  }
});
```

## 3. Create Local Development Scripts

Create a file named `dev.js` in the root directory:

```javascript
// dev.js
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Start the server
const server = spawn('node', ['--loader', 'tsx', 'server/index.ts'], {
  stdio: 'inherit',
  env: { 
    ...process.env,
    NODE_ENV: 'development',
    PORT: '5000'
  }
});

// Start the client (Vite)
const client = spawn('npx', ['vite', '--config', 'vite.config.local.ts'], {
  stdio: 'inherit'
});

// Handle process termination
process.on('SIGINT', () => {
  server.kill();
  client.kill();
  process.exit();
});

server.on('close', (code) => {
  client.kill();
  process.exit(code);
});

client.on('close', (code) => {
  server.kill();
  process.exit(code);
});
```

## 4. Update package.json

Add the following script to your package.json:

```json
"scripts": {
  "dev:local": "node --loader tsx dev.js",
  "dev": "NODE_ENV=development tsx server/index.ts",
  "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
  "start": "NODE_ENV=production node dist/index.js"
}
```

## 5. Create a .env file

Create a `.env` file in the root directory:

```
PORT=5000
NODE_ENV=development
```

## 6. Run the Project Locally

```bash
npm run dev:local
```

This will start both the backend server on port 5000 and the Vite development server with hot reloading.

## 7. VS Code Extensions Recommendations

Install these extensions for better development experience:
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)