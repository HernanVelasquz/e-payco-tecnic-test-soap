import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserData } from './data/user.data';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserData.name) private readonly userModel: Model<UserData>,
  ) {}

  async createUser(userData: UserData): Promise<UserData> {
    const createdUser = new this.userModel(userData);
    return await createdUser.save();
  }

  async findUserByPhoneNumber(phoneNumber: string): Promise<UserData> {
    try {
      return await this.userModel.findOne({ phoneNumber: phoneNumber }).exec();
    } catch (error) {
      console.log(error);
    }
  }

  async findUserByDocumentNumber(documentNumber: string): Promise<UserData> {
    try {
      return await this.userModel
      .findOne({ numberDocument: documentNumber })
      .exec();
    } catch (error) {
      console.log(error);
    }
  
  }
}
