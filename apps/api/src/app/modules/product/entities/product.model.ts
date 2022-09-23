import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductSchema } from "./product.schema";

@Module({
  imports:[MongooseModule.forFeature([{name:Product.name,schema:ProductSchema}])],
  exports:[MongooseModule.forFeature([{name:Product.name,schema:ProductSchema}])],
})

export class ProductModel{}