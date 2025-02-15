import { Injectable } from "@nestjs/common";

export interface User {
  email: string,
  password: string
}

@Injectable()
export class UsersService {

  private readonly users = [
    {
      email: "johndoe@gmail.com",
      password: "john1234",
    },
    {
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
