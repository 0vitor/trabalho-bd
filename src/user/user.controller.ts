import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Criado com sucesso.', type: User })
  @ApiNotFoundResponse({ description: 'Não encontrado.' })
  @ApiBadRequestResponse({ description: 'Requisição inválida.' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiNotFoundResponse({ description: 'Não encontrado.' })
  @ApiOkResponse({ description: 'Encontrado com sucesso.' })
  @ApiResponse({
    type: User,
    isArray: true,
  })
  findAll() {
    return this.userService.findAll();
  }
}
