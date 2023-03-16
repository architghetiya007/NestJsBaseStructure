import { PartialType } from '@nestjs/mapped-types';
import { ApiResponseProperty } from '@nestjs/swagger';
import { BaseSuccessResponse } from 'src/utils/common.dto';
import { User, UserDocument } from '../entities/user.entity';

export class CreateUserResponse extends PartialType(BaseSuccessResponse) {
    @ApiResponseProperty({
      type: User,
    })
    data?: UserDocument;
  }