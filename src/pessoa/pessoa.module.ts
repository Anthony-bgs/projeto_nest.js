
import { Module } from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { PessoaProvider } from './pessoa.providers';
import { DatabaseModule } from '../database/db.module';
import { PessoaController } from './pessoa.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [PessoaController],
  providers: [
    PessoaService,
    ...PessoaProvider,
  ],
})
export class PessoaModule {}