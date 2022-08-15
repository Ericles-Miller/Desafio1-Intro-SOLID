import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  //singleton 
  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }
    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO):User{
      const user = new User();

      Object.assign(user,{
        name,
        email,
        admin: false,
        created_at: new Date(),
        updated_at: new Date()
      });
      
      this.users.push(user);
      return user;
  }

  findById(id: string): User {
    const todo = this.users.find(user => user.id === id);
    return todo;
  }
  
  findByEmail(email:string): User {
    const user = this.users.find(user => user.email === email); 
    return user;
  }

  turnAdmin(user: User): User {
      user.admin = true;
      user.updated_at = new Date();
      return user;
  }

  list(): User[] {
    return this.users; 
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

  findById(id: string): User | undefined {
    // Complete aqui
  }
/*
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
