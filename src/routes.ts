import { Router } from 'express';
import { checkJwt } from './common/middleware/auth';
import Handlers from './handlers/handlers';
import Services from './services/services';

const setupRoutes = ({
  handlers
}: {
  handlers: Handlers;
  services: Services;
}) => {
  const router = Router();

  // Auth
  router.post('/auth/signup', handlers.users.signup.bind(handlers.users));
  router.post('/auth/signin', handlers.users.signin.bind(handlers.users));
  router.post('/auth/verify', handlers.users.signup);
  router.post('/auth/me', handlers.users.signup);

  // Fonts
  router.get('/fonts', handlers.fonts.list.bind(handlers.fonts)); // editor fonts
  router.post('/fonts/_search', handlers.fonts.search.bind(handlers.fonts));

  // Designs
  router.post(
    '/designs',
    checkJwt,
    handlers.designs.create.bind(handlers.designs)
  );
  router.get('/designs', handlers.designs.list.bind(handlers.designs));

  // Components

  router.get('/components', (req, res) => {
    res.send({ components: [] });
  });
  router.get('/uploads', (req, res) => {
    res.send({ uploads: [] });
  });

  return router;
};

export default setupRoutes;
