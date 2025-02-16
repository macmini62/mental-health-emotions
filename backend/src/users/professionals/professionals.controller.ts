import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { ProfessionalService } from "./professionals.service";
import { professional } from "./interface/professionals.interface";
import { Request, Response } from "express";
import { RolesGuard } from "src/guards/role.guard";
import { Role } from "src/enums/role.enum";
import { Roles } from "src/decorators/role.decorator";
import { SkipAuth } from "src/decorators/auth.decorator";

@Controller("professionals")
@UseGuards(RolesGuard)
export class ProfessionalController {
  constructor(private usersService: ProfessionalService) {}

  @Get("/")
  getAll(){
    // console.log("hello professional!")
    // return this.usersService.getAllUsers();
  }

  @SkipAuth()
  @Get("/:id")
  get(@Req() req: Request, @Param("id") userId: string) {
    console.log(req);
    return this.usersService.getUser(userId);
  }
  
  @Post("create")
  @Roles(Role.professional)
  async add(@Body() data: professional, @Res() res: Response){
    const userId: string = await this.usersService.addUser(data);
  
    if(userId){
      return res.status(201).send({_id: userId});
    }
    return res.status(500).send({ Error: "Email address has already been used!" });
  }

  @Post("verify")
  async verify(@Body() data: professional, @Res() res: Response){
    const userId: object = await this.usersService.verifyUser(data);
  
    if(userId){
      return res.status(200).send({...userId});
    }
    return res.status(500).send({ Error: "User does not exists!" });
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

