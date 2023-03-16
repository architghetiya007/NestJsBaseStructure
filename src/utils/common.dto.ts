import { ApiResponseProperty } from '@nestjs/swagger';

export class BaseSuccessResponse {
  @ApiResponseProperty({
    type: String,
  })
  message: string;
}

export class BaseFailResponse {
  @ApiResponseProperty({
    type: String,
  })
  message: string;

  @ApiResponseProperty({
    type: String,
  })
  error: string;
}