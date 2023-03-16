import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserRequest {
  @ApiProperty({
    name: 'firstName',
    description: 'First Name',
    required: true,
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({
    name: 'lastName',
    description: 'Last Name',
    required: true,
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({
    name: 'email',
    description: 'Email',
    required: false,
    type: String,
  })
  @IsEmail()
  @IsString()
  email: string;
}
