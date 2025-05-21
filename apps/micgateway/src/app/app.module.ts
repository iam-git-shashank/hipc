import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { UserController } from "./user.controller";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "Item_Microservice",
        transport: Transport.TCP,
        options: {
          host: "127.0.0.1",
          port: 3001, // make sure this matches the port in the auth service
        },
      },
    ]),
  ],
  controllers: [AppController,UserController],
  providers: [AppService],
})
export class AppModule {}
