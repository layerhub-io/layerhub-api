import express from 'express';
import cors from 'cors';
import morgan from './common/middleware/morgan';
import { rateLimiter } from './common/middleware/rate-limit';
import errorMiddleware from './common/middleware/error';
import Handlers from './handlers/handlers';
import Services from './services/services';
import setupRoutes from './routes';
import { loadConfig } from './config/config';

async function bootstrap() {
  const config = loadConfig();
  const app = express();
  const services = new Services(config);
  const handlers = new Handlers(services);

  const routes = setupRoutes({
    handlers,
    services
  });
  app.use(cors());
  app.use('/api/', rateLimiter);
  app.use(express.json());
  app.use(morgan);

  app.use('/api', routes);

  app.use(errorMiddleware);

  app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
  });
}

bootstrap();
