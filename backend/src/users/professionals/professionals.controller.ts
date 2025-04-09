import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { ProfessionalService } from "./professionals.service";
import { contents, professional, profile } from "./interface/professionals.interface";
import { Request, Response } from "express";
import { RolesGuard } from "src/guards/role.guard";
import { Role } from "src/enums/role.enum";
import { Roles } from "src/decorators/role.decorator";
import { SkipAuth } from "src/decorators/auth.decorator";

@Controller("professionals")
@UseGuards(RolesGuard)
export class ProfessionalController {
  constructor(
    private professionalService: ProfessionalService
  ) {}

  @Get("/")
  getAll(){
    // console.log("hello professional!")
    // return this.professionalService.getAllUsers();
  }

  @SkipAuth()
  @Get("/:id")
  get(@Req() req: Request, @Param("id") userId: string) {
    // console.log(req);
    return this.professionalService.getUser(userId);
  }
  
  // @SkipAuth()
  // @Post("create")
  // @Roles(Role.professional)
  // async add(@Body() data: professional, @Res() res: Response){
  //   const results: professional = await this.professionalService.addUser(data);
  
  //   if(results){
  //     return res.status(201).send(results);
  //   }
  //   return res.status(500).send({ Error: "Professional already exists!!" });
  // }

  @SkipAuth()
  @Put("/:userId")
  update(@Body() data: professional, @Param("userId") userId: string){
    return this.professionalService.updateUser(userId, data);
  }

  @Delete("/:id")
  delete(@Param("id") userId: string){
    return this.professionalService.deleteUser(userId);
  }

  @SkipAuth()
  @Get("/user/:id")
  fetchUserData(@Param("userId") userId: string){
    return this.professionalService.getUser(userId);
  }
}

