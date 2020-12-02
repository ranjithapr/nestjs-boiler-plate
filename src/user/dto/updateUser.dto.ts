import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsNotEmpty()
  @IsOptional()
  city: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;
}

export default UpdateUserDto;