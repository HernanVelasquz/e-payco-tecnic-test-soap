import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WalletData } from './data/wallet.data';

@Injectable()
export class WalletService {
  constructor(
    @InjectModel(WalletData.name)
    private readonly walletModel: Model<WalletData>,
  ) {}

  async create(wallet: WalletData): Promise<WalletData> {
    const createdWallet = new this.walletModel(wallet);
    return await createdWallet.save();
  }

  async findByWalletValue(phoneNumber: string): Promise<WalletData> {
    return await this.walletModel.findOne({ phoneNumber }).exec();
  }

  async updateBalanceWaller(
    phoneNumber: string,
    newValance: number,
  ): Promise<WalletData> {
    return await this.walletModel
      .findOneAndUpdate({ phoneNumber, balance: newValance })
      .exec();
  }
}
