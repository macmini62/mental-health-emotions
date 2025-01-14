import { Body, Controller, Delete, Get, Param, Post, Put, Res } from "@nestjs/common";
import { UsersService } from "./users.service";
import { user } from "./interface/user";
import { Response } from "express";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get("/")
  getAll(){
    return this.usersService.getAllUsers();
  }

  @Get("/id/:id")
  get(@Param("id") userId: string) {
    return this.usersService.getUser(userId);
  }

  @Post("verify")
  async verify(@Body() data: user, @Res() res: Response){
    const userId: object = await this.usersService.verifyUser(data);
  
    if(userId){
      return res.status(200).send({...userId});
    }
    return res.status(500).send({ Error: "User does not exists!" });
  }
  
  @Post("create")
  async add(@Body() data: user, @Res() res: Response){
    const userId: string = await this.usersService.addUser(data);
  
    if(userId){
      return res.status(201).send({_id: userId});
    }
    return res.status(500).send({ Error: "Email address has already been used!" });
  }

  @Put("/id/:id")
  update(@Body() data: object, @Param("id") userId: string){
    return this.usersService.updateUser(userId, data);
  }

  @Delete("/id/:id")
  delete(@Param("id") userId: string){
    return this.usersService.deleteUser(userId);
  }
}
