import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaController } from './prisma/prisma.controller';

@Module({
  imports: [],
  controllers: [AppController, PrismaController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
