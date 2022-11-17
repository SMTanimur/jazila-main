import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Cart, CartSchema } from "./cart.schema";

@Module({
  imports:[MongooseModule.forFeature([{name:Cart.name,schema:CartSchema}])],
  exports:[MongooseModule.forFeature([{name:Cart.name,schema:CartSchema}])],
})

export class CartModel{}