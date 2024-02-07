import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, Matches, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'mockson da silva' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ example: '2023-09-23T12:32.394Z' })
  @IsDateString()
  @IsNotEmpty()
  data_nascimento: Date;

  @ApiProperty({ example: '798.954.215-58' })
  @Matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)
  @IsNotEmpty()
  cpf: string;
}
