import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Brand, BrandSchema } from "./brand.schema";


@Module({
  imports:[MongooseModule.forFeature([{name:Brand.name,schema:BrandSchema}])],
  exports:[MongooseModule.forFeature([{name:Brand.name,schema:BrandSchema}])],
})

export class BrandModel {}