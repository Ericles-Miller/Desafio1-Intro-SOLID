import { response } from "express";
import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
    //constructor(private usersRepository: IUsersRepository) {}
    constructor (private usersRepository: UsersRepository){};
    
    execute({email, name}: IRequest): void {
        const userAlreadyExists = this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("Email already exists");
        }
        this.usersRepository.create({name,email});
    }
  
}

export { CreateUserUseCase };
