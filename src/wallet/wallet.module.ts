import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletData, WalletSchema } from './data/wallet.data';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WalletData.name, schema: WalletSchema },
    ]),
  ],
  controllers: [WalletController],
  providers: [WalletService],
  exports: [],
})
export class WalletModule {}
