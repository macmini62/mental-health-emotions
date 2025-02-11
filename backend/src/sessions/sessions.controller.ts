import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { SessionsService } from "./sessions.service";

@Controller("sessions")
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  create(@Body() createSessionDto) {
    
  }

  @Get()
  findAll() {
    return this.sessionsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {

  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateSessionDto) {

  }

  @Delete(":id")
  remove(@Param("id") id: string) {

  }
}
