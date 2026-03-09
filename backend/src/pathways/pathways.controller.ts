import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { PathwaysService } from './pathways.service';
import { CreatePathwayDto } from './dto/create-pathway.dto';

@Controller('pathways')
export class PathwaysController {
  constructor(private readonly pathwaysService: PathwaysService) {}

  @Get()
  async findAll() {
    return this.pathwaysService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.pathwaysService.findById(id);
  }

  @Post()
  async create(@Body() createPathwayDto: CreatePathwayDto) {
    return this.pathwaysService.create(createPathwayDto, 'system');
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: Partial<CreatePathwayDto>,
  ) {
    return this.pathwaysService.update(id, updateData);
  }
}
