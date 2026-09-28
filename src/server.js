import 'dotenv/config';
import app from './app.js';

const port = Number.parseInt(process.env.PORT ?? '3000', 10);
const server = app.listen(port, () => {
  console.log(`HTTP server listening on port ${port}`);
});

const shutdown = (signal) => {
  console.log(`Received ${signal}, shutting down`);
  server.close((error) => {
    if (error) {
      console.error('Error while shutting down', error);
      process.exitCode = 1;
      return;
    }

    console.log('HTTP server closed');
  });
};

process.once('SIGTERM', () => shutdown('SIGTERM'));
process.once('SIGINT', () => shutdown('SIGINT'));
