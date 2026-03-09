import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PathwayDocument = Pathway & Document;

@Schema({ timestamps: true })
export class Pathway {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: 'Code' })
  icon: string;

  @Prop({ required: true, enum: ['Technical', 'Non-Technical'] })
  category: string;

  @Prop({ default: 0 })
  resourceCount: number;

  @Prop({ default: 0 })
  subscriberCount: number;

  @Prop({ required: true })
  createdBy: string;

  @Prop({ default: 'active', enum: ['active', 'pending', 'archived'] })
  status: string;
}

export const PathwaySchema = SchemaFactory.createForClass(Pathway);
