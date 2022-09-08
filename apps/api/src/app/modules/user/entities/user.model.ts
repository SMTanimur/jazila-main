import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./user.schema";

@Module({
  imports:[MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  exports:[MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])]
})

export class UsersModel{}