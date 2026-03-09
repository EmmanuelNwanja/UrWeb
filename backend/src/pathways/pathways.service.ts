import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pathway, PathwayDocument } from './schemas/pathway.schema';
import { CreatePathwayDto } from './dto/create-pathway.dto';

@Injectable()
export class PathwaysService {
  constructor(
    @InjectModel(Pathway.name) private readonly pathwayModel: Model<PathwayDocument>,
  ) {}

  async findAll(): Promise<PathwayDocument[]> {
    return this.pathwayModel.find({ status: 'active' }).sort({ subscriberCount: -1 }).exec();
  }

  async findById(id: string): Promise<PathwayDocument> {
    const pathway = await this.pathwayModel.findById(id).exec();
    if (!pathway) {
      throw new NotFoundException('Pathway not found');
    }
    return pathway;
  }

  async create(createPathwayDto: CreatePathwayDto, userId: string): Promise<PathwayDocument> {
    const pathway = new this.pathwayModel({
      ...createPathwayDto,
      createdBy: userId,
    });
    return pathway.save();
  }

  async update(id: string, updateData: Partial<CreatePathwayDto>): Promise<PathwayDocument> {
    const pathway = await this.pathwayModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
    if (!pathway) {
      throw new NotFoundException('Pathway not found');
    }
    return pathway;
  }

  async incrementResourceCount(id: string): Promise<void> {
    await this.pathwayModel.findByIdAndUpdate(id, { $inc: { resourceCount: 1 } }).exec();
  }
}
