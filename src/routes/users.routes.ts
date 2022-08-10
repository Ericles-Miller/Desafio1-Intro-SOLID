import { Router } from "express";
import { User } from "../modules/users/model/User";


import { createUserController } from "../modules/users/useCases/createUser";
import { listAllUsersController } from "../modules/users/useCases/listAllUsers";
import { showUserProfileController } from "../modules/users/useCases/showUserProfile";
import { turnUserAdminController } from "../modules/users/useCases/turnUserAdmin";

const usersRoutes = Router();

const users: User[] = []; // importei a classe usuario

usersRoutes.post("/", (request, response) => {
  //createUserController.handle(request, response);
  const {name,email} = request.body;

  const user = new User();

  Object.assign(user,{
      name,  
      email,
      admin:false,
  });
      
  users.push(user);
  return response.status(201).json({users});
});

usersRoutes.patch("/:user_id/admin", (request, response) =>
  turnUserAdminController.handle(request, response)
);

usersRoutes.get("/:user_id", (request, response) =>
  showUserProfileController.handle(request, response)
);

usersRoutes.get("/", (request, response) =>
  listAllUsersController.handle(request, response)
);

export { usersRoutes };
