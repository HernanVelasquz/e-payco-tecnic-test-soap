import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { ResponseBuildingModel } from 'src/common';
import { WalletData } from './data/wallet.data';
import { RegisterWalletDto } from './dto/registerWallet.dto';

@Controller('wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post('/registerWallet')
  async registerWaller(
    @Body() walletDto: RegisterWalletDto,
  ): Promise<ResponseBuildingModel<WalletData>> {
    try {
      const wallet = await this.walletService.create(walletDto);
      return new ResponseBuildingModel(true, {
        id: wallet.id,
        phoneNumber: wallet.phoneNumber,
        userId: wallet.userId,
        balance: wallet.balance,
        createAt: wallet.createAt,
      });
    } catch (error) {
      throw new ResponseBuildingModel(false, null, {
        code: error.status,
        title: 'Error',
        error: error.message,
      });
    }
  }

  @Get('/findWalletByNumber/:phoneNumber')
  async findByWalletValue(
    @Param('phoneNumber') phoneNumber: string,
  ): Promise<ResponseBuildingModel<WalletData>> {
    try {
      const wallet = await this.walletService.findByWalletValue(phoneNumber);
      if (!wallet)
        return new ResponseBuildingModel(false, null, {
          code: '404',
          title: 'Not Found',
          error: 'Wallet not found',
        });
      return new ResponseBuildingModel(true, {
        id: wallet.id,
        phoneNumber: wallet.phoneNumber,
        userId: wallet.userId,
        balance: wallet.balance,
        createAt: wallet.createAt,
      });
    } catch (error) {
      throw new ResponseBuildingModel(false, null, {
        code: error.status,
        title: 'Error',
        error: error.message,
      });
    }
  }

  @Post(':phoneNumber/updateBalance')
  async updateBalanceWaller(
    @Param('phoneNumber') phoneNumber: string,
    @Body('newValance') newValance: number,
  ): Promise<ResponseBuildingModel<WalletData>> {
    try {
      const wallet = await this.walletService.updateBalanceWaller(
        phoneNumber,
        newValance,
      );
      if (!wallet)
        return new ResponseBuildingModel(false, null, {
          code: '404',
          title: 'Not Found',
          error: 'Wallet not found',
        });
      return new ResponseBuildingModel(true, {
        id: wallet.id,
        phoneNumber: wallet.phoneNumber,
        userId: wallet.userId,
        balance: wallet.balance,
        createAt: wallet.createAt,
      });
    } catch (error) {
      throw new ResponseBuildingModel(false, null, {
        code: error.status,
        title: 'Error',
        error: error.message,
      });
    }
  }
}
