import Router from 'express-promise-router';
import home from './view/home';

const router = Router();

router.use('/', home);

// Add more routes as needed

export default router;
