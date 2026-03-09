import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NftsController } from './nfts.controller';
import { NftsService } from './nfts.service';
import { WeberNFT, WeberNFTSchema } from './schemas/weber-nft.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: WeberNFT.name, schema: WeberNFTSchema }]),
  ],
  controllers: [NftsController],
  providers: [NftsService],
  exports: [NftsService],
})
export class NftsModule {}
