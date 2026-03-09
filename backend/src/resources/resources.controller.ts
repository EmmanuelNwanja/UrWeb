import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { CreateResourceDto } from './dto/create-resource.dto';

@Controller('resources')
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Get()
  async findAll(@Query('pathway') pathwayId?: string) {
    return this.resourcesService.findAll(pathwayId);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.resourcesService.findById(id);
  }

  @Post()
  async create(@Body() createResourceDto: CreateResourceDto) {
    return this.resourcesService.create(createResourceDto, 'system');
  }

  @Post(':id/vote')
  async vote(@Param('id') id: string) {
    return this.resourcesService.vote(id);
  }
}
