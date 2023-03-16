import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { getConnectionToken, MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';
import { Connection } from 'mongoose';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: async (connection: Connection) => {
          const schema = UserSchema;
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          schema.plugin(require('mongoose-unique-validator'));
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          schema.plugin(require('mongoose-autopopulate'));
          return schema;
        },
        inject: [getConnectionToken()],
      },
    ])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
function AutoIncrementFactory(connection: Connection) {
  throw new Error('Function not implemented.');
}

