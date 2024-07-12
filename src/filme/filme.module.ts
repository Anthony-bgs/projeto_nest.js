import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FilmeService } from './filme.service';
import { FilmeProvider } from './filme.providers';
import { DatabaseModule } from '../database/db.module';
import { FilmeController } from './filme.controller';

@Module({
  imports: [DatabaseModule,HttpModule],
  controllers: [FilmeController],
  providers: [
    FilmeService,
    ...FilmeProvider,
  ],
})
export class FilmeModule {}