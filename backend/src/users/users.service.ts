import { Injectable } from "@nestjs/common";

export interface User {
  id: number,
  email: string,
  password: string
}

@Injectable()
export class UsersService {
  constructor(
    
  ){}

  private readonly users = [
    {
      id: 1,
      email: "johndoe@gmail.com",
      password: "john1234",
    },
    {
      id: 2,
      email: "janedoe@gmail.com",
      password: "jane1234",
    },
  ];

  async findOne(email: string):  Promise<User> {
    const user = this.users.find(user => user.email === email);
    console.log(user)
    return user;
  }
}
