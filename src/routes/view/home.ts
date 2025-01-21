import { Request, Response } from 'express';
import Router from 'express-promise-router';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.render('home');
});

export default router;
