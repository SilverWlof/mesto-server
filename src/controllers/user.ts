import { Request, Response } from "express";
import { constants } from "http2";
import User from "../models/user";
import { NotFoundError, UserErrorResponce } from "../utils/errors";

export const userId = '662d16b824e7ed721daa1315';

export const getUsers = (req: Request, res: Response) => {
  return User.find({})
    .then((users) => {
      return res.status(constants.HTTP_STATUS_OK).send(users)
    })
    .catch(() => UserErrorResponce(res))
}

export const getUserById = (req: Request, res: Response) => {
  return User.findById(req.params.userId).orFail(NotFoundError())
    .then((user) => {
      return res.status(constants.HTTP_STATUS_OK).send(user);
    })
    .catch((error) => UserErrorResponce(res, error))
}

export const createUser = (req: Request, res: Response) => {
  return User.create(req.body)
    .then((user) => {
    return res.status(constants.HTTP_STATUS_CREATED).send(user);
    })
    .catch((error) => UserErrorResponce(res, error))
}

export const updateUserData = (req: Request, res: Response) => {
  return User.findByIdAndUpdate(userId, {
    name: req.body.name,
    about: req.body.about
  },
  {
    new: true
  }).orFail(NotFoundError())
    .then((user) => {
      return res.status(constants.HTTP_STATUS_OK).send(user);
    })
    .catch((error) => UserErrorResponce(res, error))
}

export const updateUserAvatar = (req: Request, res: Response) => {
  return User.findByIdAndUpdate(userId, {
    avatar: req.body.avatar
  },
  {
    new: true
  }).orFail(NotFoundError())
    .then((user) => {
      return res.status(constants.HTTP_STATUS_OK).send(user);
    })
    .catch((error) => UserErrorResponce(res, error))
}