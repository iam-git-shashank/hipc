import { Controller, Get, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Controller("user")
export class UserController {
  constructor(@Inject("Item_Microservice") private client: ClientProxy) {}

  @Get("ping")
  async pingAuth() {
    return this.client.send({ cmd: "ping" }, {});
  }
}
