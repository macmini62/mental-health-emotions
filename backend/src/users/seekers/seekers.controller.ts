import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from "@nestjs/common";
import { SeekerService } from "./seekers.service";
import { seeker } from "./interface/seekers.interface";
import { Request, Response } from "express";
import { SkipAuth } from "src/decorators/auth.decorator";

@Controller("seekers")
export class SeekerController {
  constructor(private seekerService: SeekerService) {}

  @SkipAuth()
  @Get("/")
  getAll(){
    return this.seekerService.getAllUsers();
  }

  @SkipAuth()
  @Get("/:id")
  get(@Param("id") userId: string) {
      return this.seekerService.getUser(userId);
  }
  
  // @Post("create")
  // async add(@Param() id: string, @Body() data: seeker, @Res() res: Response){
  //   const results: seeker = await this.seekerService.addUser(id, data);
  
  //   if(results){
  //     return res.status(201).send(results);
  //   }
  //   return res.status(500).send({ Error: "Can't add seeker becoz profile exists!!" });
  // }

  @Post("verify")
  async verify(@Body() data: seeker, @Res() res: Response){
    const userId: object = await this.seekerService.verifyUser(data);
  
    if(userId){
      return res.status(200).send({...userId});
    }
    return res.status(500).send({ Error: "User does not exists!" });
  }
  
  @Put("/:id")
  update(@Body() data: object, @Param("id") userId: string){
    return this.seekerService.updateUser(userId, data);
  }

  @Delete("/:id")
  delete(@Param("id") userId: string){
    return this.seekerService.deleteUser(userId);
  }
}
