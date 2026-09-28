import express from 'express';

const app = express();

app.disable('x-powered-by');

app.get('/health', (_request, response) => {
  response.json({ status: 'ok' });
});

app.use((_request, response) => {
  response.status(404).json({ error: 'Not Found' });
});

export default app;
