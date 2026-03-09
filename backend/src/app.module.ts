import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PathwaysModule } from './pathways/pathways.module';
import { ResourcesModule } from './resources/resources.module';
import { NftsModule } from './nfts/nfts.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      process.env.MONGODB_URI || 'mongodb://localhost:27017/urweb',
    ),
    AuthModule,
    UsersModule,
    PathwaysModule,
    ResourcesModule,
    NftsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
