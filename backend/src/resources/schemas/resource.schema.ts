import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ResourceDocument = Resource & Document;

@Schema({ timestamps: true })
export class Resource {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true, enum: ['article', 'tutorial', 'video', 'program', 'analysis'] })
  type: string;

  @Prop({ type: Types.ObjectId, ref: 'Pathway', required: true })
  pathway: Types.ObjectId;

  @Prop({ type: [String], default: [] })
  topics: string[];

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  author: Types.ObjectId;

  @Prop({ default: 0 })
  votes: number;

  @Prop({ default: 0 })
  score: number;
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);
