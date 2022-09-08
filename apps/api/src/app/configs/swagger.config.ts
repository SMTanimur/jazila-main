
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const SwaggerConfig = (app: INestApplication) => {
  // Swagger Setup
  const config = new DocumentBuilder()
    .setTitle('Jazila-Ecommerce API')
    .setDescription('The Jazila API description')
    .setVersion('1.0')
    .addServer('http://localhost:3333/api')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
};
