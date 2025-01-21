import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import logger from 'morgan';

import apiRouter from './routes/apiRouter';
import viewRouter from './routes/viewRouter';
import { ApiError } from './error/ApiError';

const BASE_API_PATH = '/api';

export const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(helmet());
app.use(cors());
app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(BASE_API_PATH, apiRouter);
app.use('/', viewRouter);

// api error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    console.error(err.statusCode, err.message);
    res.status(err.statusCode).json({ message: err.message });
    return;
  }
  if (req.url.startsWith(`${BASE_API_PATH}/`)) {
    console.error(err);
    res.status(500).json({ message: err.message });
    return;
  }
  next(err);
});

// view error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  // set locals
  res.locals.message = err.message;
  res.locals.error = err;

  // render the error page
  res.status(500);
  res.render('error');
});
