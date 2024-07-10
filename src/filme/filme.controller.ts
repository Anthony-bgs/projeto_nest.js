import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { FilmeService } from "./filme.service";
import { Filme } from "./filme.interface";
import { FilmeDto } from "./filme.dto";

@Controller("/filme")
export class FilmeController {
  constructor(private readonly FilmeService: FilmeService) { }
 
  @Get("/findID/:id")
  async findID(@Param("id") id:string) : Promise<Filme> {
    return this.FilmeService.findID(id)
  }

  @Post("/criar")
  async create(@Body() createFilmeDto: FilmeDto): Promise<Filme> {
    return this.FilmeService.create(createFilmeDto)
  }
  @Get("/findALL")
  async findALL(): Promise<Filme[]> {
    return this.FilmeService.findAll()
  }
}