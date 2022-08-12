import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {

      const idAlreadyExists = this.usersRepository.findById(user_id);
      if(!idAlreadyExists){
        throw new Error("Id not exisits");
      }

      if(idAlreadyExists.admin){
        const users = this.usersRepository.list();
        return users;
      }
      else{
        throw new Error("User not permission!");
      }
  }
}

export { ListAllUsersUseCase };
