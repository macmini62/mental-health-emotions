import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Session } from "./schema/sessions.schema";
import { Model } from "mongoose";

@Injectable()
export class SessionsService {
  constructor(
    @InjectModel(Session.name) private SessionModel: Model<Session>
  ){}

  create() {

  }

  findAll() {

  }

  findOne(id: number) {

  }

  update(id: number) {

  }

  remove(id: number) {

  }
}
