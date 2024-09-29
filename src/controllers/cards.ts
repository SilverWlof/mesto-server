import { Request, Response } from "express";
import Card from "../models/cards";
import { constants } from "http2";
import { NotFoundError, CardErrorResponce } from "../utils/errors";
import { userId } from "./user";

export const getCards = (req: Request, res: Response) => {
  return Card.find({}).then((cards) => {
    return res.status(constants.HTTP_STATUS_OK).send(cards);
  }).catch(() => CardErrorResponce(res))
}

export const createCard = (req: Request, res: Response) => {
  return Card.create(req.body).then((card) => {
    return res.status(constants.HTTP_STATUS_CREATED).send(card);
  }).catch((error) => CardErrorResponce(res, error))
}

export const putLikeOnCard = (req: Request, res: Response) => {
  return Card.findByIdAndUpdate(req.params.cardId,
    { $addToSet: {likes: userId}},
    {new: true}
  ).then((card) => {
    return res.status(constants.HTTP_STATUS_OK).send(card);
  }).catch((error) => CardErrorResponce(res, error));
}

export const deleteLikeFromCard = (req: Request, res: Response) => {
  return Card.findByIdAndUpdate(req.params.cardId,
    { $pull: {likes: userId}},
    {new: true}
  ).then((card) => {
    return res.status(constants.HTTP_STATUS_OK).send(card)
  }).catch((error) => CardErrorResponce(res, error));
}

export const deleteCard = (req: Request, res: Response) => {
  return Card.findByIdAndDelete(req.params.cardId).then((card) => {
    return res.status(constants.HTTP_STATUS_OK).send(card);
  }).catch((error) => CardErrorResponce(res, error));
}