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
    // createUserController.handle(request, response);
    const {name, description} = request.body;

    const createUserUseCase = new CreateUserUseCase(usersRepository); 
   
    return response.status(201).send();
});

usersRoutes.patch("/:user_id/admin", (request, response) =>
  turnUserAdminController.handle(request, response)
);

usersRoutes.get("/:user_id", (request, response) =>
  showUserProfileController.handle(request, response)
);

usersRoutes.get("/", (request, response) => {
  //listAllUsersController.handle(request, response)
  const all = UsersRepository.list(); 

  return response.json(all);
});

export { usersRoutes };
