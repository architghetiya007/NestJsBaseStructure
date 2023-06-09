import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
  collection: 'User',
})

export class User {
    @Prop({
        type:String,
        required:true,
    })
    firstName : string;

    @Prop({
        type:String,
        required:true
    })
    lastName:string

    @Prop({
        type:String,
        required:true
    })
    email:string;
}

export const UserSchema = SchemaFactory.createForClass(User);