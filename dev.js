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