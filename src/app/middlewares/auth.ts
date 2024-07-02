import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validation check
      //if everything allright next() ->
      
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;
