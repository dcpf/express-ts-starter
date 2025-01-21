import Router from 'express-promise-router';
import users from './api/users';

const router = Router();

router.use('/users', users);

// Add more routes as needed

export default router;
