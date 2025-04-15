import express, { type Request, Response, NextFunction } from 'express';
import { registerRoutes } from './routes';
import { setupVite, serveStatic, log } from './vite';
import path from 'path';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS handling for Vercel deployment
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.VERCEL_URL || '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on('finish', () => {
    const duration = Date.now() - start;
    if (path.startsWith('/api')) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + '…';
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({ message });
    console.error(err);
  });

  if (process.env.NODE_ENV === 'development') {
    await setupVite(app, server);
  } else {
    // Serve static files from the dist/public directory in production
    app.use(express.static(path.join(process.cwd(), 'dist/public')));
    // Handle client-side routing
    app.get('*', (req, res) => {
      res.sendFile(path.join(process.cwd(), 'dist/public/index.html'));
    });
  }

  // Use environment variable PORT if available, otherwise default to 5000
  const port = process.env.PORT || 5000;
  if (!process.env.VERCEL) {
    server.listen(port, () => {
      log(`serving on port ${port}`);
    });
  }

  // Export for serverless
  export default app;
})();
