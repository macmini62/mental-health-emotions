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
  
  @SkipAuth()
  @Post("create")
  // @Roles(Role.professional)
  async add(@Body() data: professional, @Res() res: Response){
    const results: professional = await this.usersService.addUser(data);
  
    if(results){
      return res.status(201).send(results);
    }
    return res.status(500).send({ Error: "Professional already exists!!" });
  }
  
  @SkipAuth()
  @Put("/:id")
  update(@Body() data: object, @Param("id") userId: string){
    return this.usersService.updateUser(userId, data);
  }

  @Delete("/:id")
  delete(@Param("id") userId: string){
    return this.usersService.deleteUser(userId);
  }
}

