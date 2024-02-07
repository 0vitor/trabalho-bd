import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@Injectable()
export class UserService {
  private users: User[] = [];

  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    const user: User = new User();
    user.id = this.users.length;
    Object.assign(user, createUserDto);
    this.users.push(user);

    return user;
  }

  findAll() {
    return this.users;
  }
}
