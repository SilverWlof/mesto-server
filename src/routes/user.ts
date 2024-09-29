import { Router } from "express";
import { createUser, updateUserData, updateUserAvatar, getUsers, getUserById } from "../controllers/user";

const user = Router();

user.get('/', getUsers);

user.get('/:userId', getUserById);

user.post('/', createUser);

user.patch('/me', updateUserData);

user.patch('/me/avatar', updateUserAvatar);

export default user;