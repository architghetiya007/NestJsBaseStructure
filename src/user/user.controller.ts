import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserRequest } from './dto/request.dto';
import { CreateUserResponse } from './dto/response.dto';
import { ApiBody, ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { BaseFailResponse } from 'src/utils/common.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({
    summary: 'Create User',
    description: 'Create the user',
    tags: ['User', 'Create', 'POST'],
  })
  @ApiBody({
    type: CreateUserRequest,
    required: true,
  })
  @ApiOkResponse({
    type: CreateUserResponse,
    description: 'User created successfully',
  })
  @ApiInternalServerErrorResponse({
    type: BaseFailResponse,
    description: 'Internal Server Error',
  })
  create(@Body() createUserDto: CreateUserRequest) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
