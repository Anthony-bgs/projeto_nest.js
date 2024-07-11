import { Module } from '@nestjs/common';
import { FilmeService } from './filme.service';
import { FilmeProvider } from './filme.providers';
import { DatabaseModule } from '../database/db.module';
import { FilmeController } from './filme.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [FilmeController],
  providers: [
    FilmeService,
    ...FilmeProvider,
  ],
})
export class FilmeModule {}