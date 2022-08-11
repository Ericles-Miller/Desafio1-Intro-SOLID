import { Response, Request } from "express";
import { User } from "modules/users/model/User";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const {name,email} = request.body;

    const createUserUseCase = new CreateUserUseCase();

    Object.assign(user,{
      name,  
      email,
      admin:false,
    });
      
  users.push(user);
  return response.status(201).json({users});
  }
}

export { CreateUserController };
