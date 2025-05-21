import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class AppService {
  constructor(
    @Inject("Item_Microservice") private readonly client: ClientProxy
  ) {}
  getData(createItemDto: {}) {
    return this.client.send({ role: "item", cmd: "create" }, createItemDto);
  }
}
