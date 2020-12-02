import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}

export default CreateUserDto;