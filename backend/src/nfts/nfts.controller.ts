import { Controller, Get, Post, Param } from '@nestjs/common';
import { NftsService } from './nfts.service';

@Controller('nfts')
export class NftsController {
  constructor(private readonly nftsService: NftsService) {}

  @Get('user/:userId')
  async findByUser(@Param('userId') userId: string) {
    return this.nftsService.findByUser(userId);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.nftsService.findById(id);
  }

  @Post(':id/repair')
  async repair(@Param('id') id: string) {
    return this.nftsService.repair(id);
  }

  @Post(':id/level-up')
  async levelUp(@Param('id') id: string) {
    return this.nftsService.levelUp(id);
  }
}
