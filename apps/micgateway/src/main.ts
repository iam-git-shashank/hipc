// apps/gateway/src/main.ts
import { NestFactory } from "@nestjs/core";
import { Logger } from "@nestjs/common";
import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "*",
    credentials: true,
  });

  await app.listen(3000);
  Logger.log(`🚀 Gateway running on http://localhost:3000`);
}
bootstrap();
