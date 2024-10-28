import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WalletDocument = HydratedDocument<WalletData>;

@Schema({ collection: 'information.wallet.collection', timestamps: true })
export class WalletData {
  @Prop()
  public id: string;

  @Prop({ isRequired: true })
  public phoneNumber: string;

  @Prop({ isRequired: true })
  public userId: string;

  @Prop()
  public balance: number;

  @Prop()
  public createAt: string;
}

export const WalletSchema = SchemaFactory.createForClass(WalletData);