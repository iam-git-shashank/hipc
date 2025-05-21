import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern("user.create")
  createItem(@Payload() createUserDto: { name: "sdsd" }) {
    return this.usersService.create(createUserDto);
  }
  @MessagePattern({ cmd: "ping" })
  ping() {
    return "pong from auth";
  }
  @MessagePattern("user.findAll")
  findAll() {
    return this.usersService.findAll();
  }

  @MessagePattern("user.findOne")
  findOne(@Payload() id: number) {
    return this.usersService.findOne(id);
  }

  @MessagePattern("user.update")
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern("user.remove")
  remove(@Payload() id: number) {
    return this.usersService.remove(id);
  }
}
