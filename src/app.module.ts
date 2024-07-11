import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PessoaModule } from "./pessoa/pessoa.module";
import { FilmeModule } from "./filme/filme.module";

@Module({
  imports: [PessoaModule, FilmeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
