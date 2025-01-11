import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SeekersService } from './seekers.service';

@Controller('seekers')
export class SeekersController {
  constructor(private seekerService: SeekersService){}

  @Get()
  getAll(){
    return this.seekerService.getAllSeekers();
  }

  @Get(":id")
  get(@Param("id") seekerId: string){
    return this.seekerService.getSeeker(seekerId);
  }
  
  @Post()
  add(@Body() data: object){
    return this.seekerService.addSeeker(data);
  }

  @Put(":id")
  update(@Body() data: object, @Param("id") seekerId: string){
    return this.seekerService.updateSeeker(seekerId, data);
  }

  @Delete(":id")
  delete(@Param("id") seekerId: string){
    return this.seekerService.deleteSeeker(seekerId);
  }
}
