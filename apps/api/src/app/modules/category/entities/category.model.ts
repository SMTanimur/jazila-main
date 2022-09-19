import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Category, CategorySchema } from "./category.schema";


@Module({
  imports:[MongooseModule.forFeature([{name:Category.name,schema:CategorySchema}])],
  exports:[MongooseModule.forFeature([{name:Category.name,schema:CategorySchema}])],
})

export class CategoryModel{}