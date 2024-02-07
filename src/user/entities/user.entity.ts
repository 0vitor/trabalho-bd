import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  data_nascimento: Date;

  @ApiProperty()
  cpf: string;
}
