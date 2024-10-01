import { NextFunction, Request, Response } from "express";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  // Эта часть не работает, как и не работает req.user = {_id: '6ad1c47f-6af4-42c4-b56f-bacd15588390'}
  req.params = {
    _id: '6ad1c47f-6af4-42c4-b56f-bacd15588390'
  }

  next();
}
