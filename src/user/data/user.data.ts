import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type UserDocument = HydratedDocument<UserData>;

@Schema({ collection: 'information.user.collection', timestamps: true })
export class UserData {
    @Prop()
    public id: string;
    @Prop()
    public typeDocument: string;
    @Prop({ isRequired: true })
    public numberDocument: string;
    @Prop({ isRequired: true })
    public fullName: string;
    @Prop({ isRequired: true, unique: true })
    public email: string;
    @Prop({ isRequired: true, unique: true })
    public phoneNumber: string;
}

export const UserSchema = SchemaFactory.createForClass(UserData);