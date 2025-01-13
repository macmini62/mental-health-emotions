import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
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

  @Get("/verify")
  async verify(@Res() response: Response){
    return response;
  }
  
  @Post("add")
  async add(@Body() data: object){
    return this.usersService.addUser(data);
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
