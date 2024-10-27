import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type UserDocument = HydratedDocument<UserData>;

@Schema({ collection: 'information.user.collection', timestamps: true })
export class UserData {
    @Prop()
    id: string;
    @Prop()
    typeDocument: string;
    @Prop({ isRequired: true })
    numberDocument: string;
    @Prop({ isRequired: true })
    fullName: string;
    @Prop({ isRequired: true, unique: true })
    email: string;
    @Prop({ isRequired: true, unique: true })
    phoneNumber: string;
}

export const UserSchema = SchemaFactory.createForClass(UserData);