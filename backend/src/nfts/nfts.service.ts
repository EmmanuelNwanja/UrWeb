import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WeberNFT, WeberNFTDocument } from './schemas/weber-nft.schema';

@Injectable()
export class NftsService {
  constructor(
    @InjectModel(WeberNFT.name) private readonly nftModel: Model<WeberNFTDocument>,
  ) {}

  async findByUser(userId: string): Promise<WeberNFTDocument[]> {
    return this.nftModel
      .find({ owner: userId })
      .populate('pathway', 'name')
      .exec();
  }

  async findById(id: string): Promise<WeberNFTDocument> {
    const nft = await this.nftModel
      .findById(id)
      .populate('pathway', 'name')
      .populate('owner', 'name walletAddress')
      .exec();
    if (!nft) {
      throw new NotFoundException('Weber NFT not found');
    }
    return nft;
  }

  async repair(id: string): Promise<WeberNFTDocument> {
    const nft = await this.nftModel.findById(id).exec();
    if (!nft) {
      throw new NotFoundException('Weber NFT not found');
    }

    // Calculate repair cost based on tier and level
    // Tier 1: 0.04 + 0.009 * level
    // Tier 2: 0.04 + 0.012 * level
    // Tier 3: 0.04 + 0.016 * level
    const costMultiplier = nft.tier === 1 ? 0.009 : nft.tier === 2 ? 0.012 : 0.016;
    const repairCost = 0.04 + costMultiplier * nft.level;

    // Restore durability to 100
    nft.durability = 100;
    return nft.save();
  }

  async levelUp(id: string): Promise<WeberNFTDocument> {
    const nft = await this.nftModel.findById(id).exec();
    if (!nft) {
      throw new NotFoundException('Weber NFT not found');
    }

    const maxLevel = nft.tier === 1 ? 30 : nft.tier === 2 ? 40 : 50;
    if (nft.level >= maxLevel) {
      throw new Error('NFT is already at max level for its tier');
    }

    nft.level += 1;

    // Update energy capacity every 5 levels
    if (nft.level % 5 === 0) {
      nft.energyCapacity += 1;
    }

    return nft.save();
  }
}
