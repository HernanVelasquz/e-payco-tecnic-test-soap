import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';
import { MongooseModule } from '@nestjs/mongoose';
import { envs } from './config';

@Module({
  imports: [
    MongooseModule.forRoot(envs.urlConnectionMongo),
    UserModule,
    WalletModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
