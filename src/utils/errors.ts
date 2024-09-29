import { Response } from "express";
import { constants } from "http2";

export const NotFoundError = () => {
  const error = new Error('Пользователь не найден');
  error.name = 'NotFoundError';
  return error;
}

export const UserErrorResponce = (res: Response, error?: any) => {
  if (error.name === 'NotFoundError') {
    return res.status(constants.HTTP_STATUS_NOT_FOUND).send({message: 'Пользователь не найден'});
  }
  if (error.name === 'CastError') {
    return res.status(constants.HTTP_STATUS_BAD_REQUEST).send({message: 'Переданы не валидные данные'})
  }
  return res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).send({message: 'Ошибка на стороне сервера'})
}

export const CardErrorResponce = (res: Response, error?: any) => {
  if (error.name === 'NotFoundError') {
    return res.status(constants.HTTP_STATUS_NOT_FOUND).send({message: 'Карточка не найден'});
  }
  if (error.name === 'CastError') {
    return res.status(constants.HTTP_STATUS_BAD_REQUEST).send({message: 'Переданы не валидные данные'})
  }
  return res.status(constants.HTTP_STATUS_INTERNAL_SERVER_ERROR).send({message: 'Ошибка на стороне сервера'})
}