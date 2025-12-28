import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:5173',
      'http://localhost:3000',
      'https://svitlo-client.vercel.app/',
      'https://svitlo-client-git-master-dmitrymass-projects.vercel.app/',
      'https://svitlo-client-7be2rho5u-dmitrymass-projects.vercel.app/',
    ],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log(
    `Application is running on: http://localhost:${process.env.PORT ?? 3000}`,
  );
}
bootstrap();
