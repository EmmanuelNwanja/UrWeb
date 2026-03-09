import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PathwaysController } from './pathways.controller';
import { PathwaysService } from './pathways.service';
import { Pathway, PathwaySchema } from './schemas/pathway.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pathway.name, schema: PathwaySchema }]),
  ],
  controllers: [PathwaysController],
  providers: [PathwaysService],
  exports: [PathwaysService],
})
export class PathwaysModule {}
