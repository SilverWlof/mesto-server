import { Router } from "express";
import { getCards, createCard, deleteCard, putLikeOnCard, deleteLikeFromCard } from "../controllers/cards";

const cards = Router();

cards.get('/', getCards);

cards.post('/', createCard);

cards.put('/:cardId/likes', putLikeOnCard);

cards.delete('/:cardId/likes', deleteLikeFromCard);

cards.delete('/:cardId', deleteCard);

export default cards;