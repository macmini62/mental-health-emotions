import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisteredUsersService } from './registered-users.service';
import { CreateRegisteredUserDto } from './dto/create-registered-user.dto';
import { UpdateRegisteredUserDto } from './dto/update-registered-user.dto';

@Controller('registered-users')
export class RegisteredUsersController {
  constructor(private readonly registeredUsersService: RegisteredUsersService) {}

  @Post()
  create(@Body() createRegisteredUserDto: CreateRegisteredUserDto) {
    return this.registeredUsersService.create(createRegisteredUserDto);
  }

  @Get()
  findAll() {
    return this.registeredUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registeredUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegisteredUserDto: UpdateRegisteredUserDto) {
    return this.registeredUsersService.update(+id, updateRegisteredUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registeredUsersService.remove(+id);
  }
}
