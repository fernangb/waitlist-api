import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Waitlist API')
    .setDescription('API to manage wait lists')
    .setVersion('1.0')
    .addTag('Waitlist')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.enableCors();
  await app.listen(process.env.APP_PORT || 3000);
}

bootstrap().catch(() => {
  console.error('Could not start the application');
});
