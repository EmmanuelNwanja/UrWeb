import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  walletAddress: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  avatar: string;

  @Prop({ default: 'learner', enum: ['learner', 'contributor', 'manager', 'admin'] })
  role: string;

  @Prop({ default: 0 })
  rxp: number;

  @Prop({ default: 0 })
  tokenBalance: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
