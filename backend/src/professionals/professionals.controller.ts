import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProfessionalsService } from './professionals.service';

@Controller('professionals')
export class ProfessionalsController {
  constructor(private professionalService: ProfessionalsService) {}

  @Get("")
  getAll(){
    return this.professionalService.getAllProfs();
  }

  @Get(":id")
  get(@Param("id") profId: string) {
    return this.professionalService.getProf(profId);
  }
  
  @Post("add")
  add(@Body() data: object){
    return this.professionalService.addProf(data);
  }

  @Put(":id")
  update(@Body() data: object, @Param("id") profId: string){
    return this.professionalService.updateProf(profId, data);
  }

  @Delete(":id")
  delete(@Param("id") profId: string){
    return this.professionalService.deleteProf(profId);
  }
}
