import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {

      const idAlreadyExists = this.usersRepository.findById(user_id);
      if(!idAlreadyExists) {
         throw new Error("Id not exists");
      }
      return idAlreadyExists;
  }
}

export { ShowUserProfileUseCase };
