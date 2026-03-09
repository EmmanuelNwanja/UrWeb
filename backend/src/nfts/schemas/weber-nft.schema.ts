import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type WeberNFTDocument = WeberNFT & Document;

@Schema()
export class WeberNFTStats {
  @Prop({ default: 10 })
  smartness: number;

  @Prop({ default: 10 })
  vitality: number;

  @Prop({ default: 10 })
  dexterity: number;

  @Prop({ default: 10 })
  curiosity: number;

  @Prop({ default: 10 })
  grace: number;
}

@Schema()
export class Rune {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: ['knight', 'sorcerer', 'queen'] })
  type: string;

  @Prop({ required: true, enum: ['common', 'uncommon', 'rare', 'super_rare'] })
  rarity: string;

  @Prop({ required: true })
  boost: number;

  @Prop({ required: true })
  energyCost: number;
}

@Schema({ timestamps: true })
export class WeberNFT {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  owner: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Pathway', required: true })
  pathway: Types.ObjectId;

  @Prop({ required: true, enum: [1, 2, 3], default: 1 })
  tier: number;

  @Prop({ default: 0, min: 0, max: 50 })
  level: number;

  @Prop({ type: WeberNFTStats, default: () => ({}) })
  stats: WeberNFTStats;

  @Prop({ default: 100, min: 0, max: 100 })
  durability: number;

  @Prop({ default: 0 })
  energy: number;

  @Prop({ default: 0 })
  energyCapacity: number;

  @Prop({ default: 0 })
  mintCount: number;

  @Prop({ type: [Rune], default: [] })
  runes: Rune[];

  @Prop()
  mintAddress: string;
}

export const WeberNFTSchema = SchemaFactory.createForClass(WeberNFT);
