import { NextFunction, Request, Response } from "express";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  // Эта часть не работает, как и не работает req.user = {_id: '662d16b824e7ed721daa1315'}
  req.params = {
    _id: '662d16b824e7ed721daa1315'
  }

  next();
}