import { Body, Controller, Get, Post } from "@nestjs/common";
import { PessoaService } from "./pessoa.service";
import { Pessoa } from "./pessoa.interface";
import { PessoaDto } from "./pessoa.dto";

@Controller("/pessoa")
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) { }
  
  @Get("/findID")
  async findID(): Promise<Pessoa> {
    return this.pessoaService.findID()
  }

  @Post("/criar")
  async create(@Body() createPessoaDto: PessoaDto): Promise<Pessoa> {
    return this.pessoaService.create(createPessoaDto)
  }
  @Get("/findALL")
  async findALL(): Promise<Pessoa[]> {
    return this.pessoaService.findAll()
  }
}

//Creat Read Update Delete

//http://localhost:5000/pessoa/
