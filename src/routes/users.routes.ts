import { Router } from "express";
import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";
import { CreateUserUseCase } from "modules/users/useCases/createUser/CreateUserUseCase";
import { User } from "../modules/users/model/User";


import { createUserController } from "../modules/users/useCases/createUser";
import { listAllUsersController } from "../modules/users/useCases/listAllUsers";
import { showUserProfileController } from "../modules/users/useCases/showUserProfile";
import { turnUserAdminController } from "../modules/users/useCases/turnUserAdmin";

const usersRoutes = Router();

const users: User[] = []; // importei a classe usuario

usersRoutes.post("/", (request, response) => {
    return createUserController.handle(request, response); 
});

usersRoutes.patch("/:user_id/admin", (request, response) =>
    turnUserAdminController.handle(request, response)
);

usersRoutes.get("/:user_id", (request, response) =>
    showUserProfileController.handle(request, response)
);

usersRoutes.get("/", (request, response) => {
  return listAllUsersController.handle(request, response)
});

export { usersRoutes };
