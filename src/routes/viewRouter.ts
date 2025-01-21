import express from 'express';
import home from './view/home';

const router = express.Router();

router.use('/', home);

// Add more routes as needed

export default router;
