import express from 'express';
import users from './api/users';

const router = express.Router();

router.use('/users', users);

// Add more routes as needed

export default router;
