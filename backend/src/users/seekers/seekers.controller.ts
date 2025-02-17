import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from "@nestjs/common";
import { SeekerService } from "./seekers.service";
import { seeker } from "./interface/seekers.interface";
import { Request, Response } from "express";
import { SkipAuth } from "src/decorators/auth.decorator";

@Controller("seekers")
export class SeekerController {
  constructor(private usersService: SeekerService) {}

  @SkipAuth()
  @Get("/")
  getAll(){
    return this.usersService.getAllUsers();
  }

  @Get("/:id")
  get(@Param("id") userId: string) {
      return this.usersService.getUser(userId);
  }
  
  @Post("create")
  async add(@Body() data: seeker, @Res() res: Response){
    const userId: string = await this.usersService.addUser(data);
  
    if(userId){
      return res.status(201).send({_id: userId});
    }
    return res.status(500).send({ Error: "Can't add seeker becoz profile exists!!" });
  }

  @Post("verify")
  async verify(@Body() data: seeker, @Res() res: Response){
    const userId: object = await this.usersService.verifyUser(data);
  
    if(userId){
      return res.status(200).send({...userId});
    }
    return res.status(500).send({ Error: "User does not exists!" });
  }
  
  @Put("/:id")
  update(@Body() data: object, @Param("id") userId: string){
    return this.usersService.updateUser(userId, data);
  }

  @Delete("/:id")
  delete(@Param("id") userId: string){
    return this.usersService.deleteUser(userId);
  }
}
