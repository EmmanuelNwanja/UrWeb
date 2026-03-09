import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resource, ResourceDocument } from './schemas/resource.schema';
import { CreateResourceDto } from './dto/create-resource.dto';

@Injectable()
export class ResourcesService {
  constructor(
    @InjectModel(Resource.name) private readonly resourceModel: Model<ResourceDocument>,
  ) {}

  async findAll(pathwayId?: string): Promise<ResourceDocument[]> {
    const query = pathwayId ? { pathway: pathwayId } : {};
    return this.resourceModel
      .find(query)
      .populate('pathway', 'name')
      .populate('author', 'name')
      .sort({ score: -1 })
      .exec();
  }

  async findById(id: string): Promise<ResourceDocument> {
    const resource = await this.resourceModel
      .findById(id)
      .populate('pathway', 'name')
      .populate('author', 'name')
      .exec();
    if (!resource) {
      throw new NotFoundException('Resource not found');
    }
    return resource;
  }

  async create(createResourceDto: CreateResourceDto, authorId: string): Promise<ResourceDocument> {
    const resource = new this.resourceModel({
      ...createResourceDto,
      author: authorId,
    });
    return resource.save();
  }

  async vote(id: string): Promise<ResourceDocument> {
    const resource = await this.resourceModel
      .findByIdAndUpdate(id, { $inc: { votes: 1 } }, { new: true })
      .exec();
    if (!resource) {
      throw new NotFoundException('Resource not found');
    }
    return resource;
  }
}
