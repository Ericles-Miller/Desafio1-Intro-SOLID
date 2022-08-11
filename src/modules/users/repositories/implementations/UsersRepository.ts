import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  //singleton 
  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }
  create({ name, email }: ICreateUserDTO){
      const user = new User();

      Object.assign(user,{
        name,
        email,
        admin: false,
        created_at: new Date(),
      });

      this.users.push(user);
  }

  findById(id: string): User {
    throw new Error("Method not implemented.");
  }
  findByEmail(email: string): User {
    const email = this.users.find.(email => user.email === email);
    return User;
  }
  turnAdmin(user: User): User {
    throw new Error("Method not implemented.");
  }
  list(): User[] {
    return this.users; 
  }

  //validacao de usuario feita
  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }
  
  /*create({ name, email }: ICreateUserDTO): void { // return User
      const user = new User;
      
      Object.assign(user,{
        name,  
        email,
        admin:false,
      });
      this.users.push(user);

      //return response.status(201).json({users});
  }
/*
  findById(id: string): User | undefined {
    // Complete aqui
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
  }

  list(): User[] {
    // Complete aqui
  }*/
}

export { UsersRepository };
