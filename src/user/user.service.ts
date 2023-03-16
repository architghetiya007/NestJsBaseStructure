import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserParams } from './dto/params.dto';
import { CreateUserRequest } from './dto/request.dto';
import { CreateUserResponse } from './dto/response.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}
  async create(body: CreateUserParams): Promise<CreateUserResponse> {
    let user;
    try {
      user = await this.userModel.create(body);
    } catch (error) {
      throw new InternalServerErrorException({
        message: 'Internal Server Error',
      });
    }
    return {
      message: 'This action adds a new user',
      data: user,
    };
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
