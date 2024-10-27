import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserData, UserSchema } from './data/user.data';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserData.name, schema: UserSchema }]),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [],
})
export class UserModule {}
