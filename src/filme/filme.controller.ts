import { Body, Controller, Delete, Get, Param, Post, Query } from "@nestjs/common";
import { FilmeService } from "./filme.service";
import { Filme } from "./filme.interface";
import { FilmeAutomaticoDto, FilmeDto } from "./filme.dto";
import { query } from "express";
import { promises } from "dns";
import { Constantes } from "src/constantes";

@Controller("/filme")
export class FilmeController {
  constructor(private readonly FilmeService: FilmeService) { }

  @Get("/findID/:id")
  async findID(@Param("id") id: string): Promise<Filme> {
    return this.FilmeService.findID(id)
  }
  @Get("/findALL")
  async findALL(): Promise<Filme[]> {
    return this.FilmeService.findAll()
  }
  @Post("/criar")
  async create(@Body() createFilmeDto: FilmeDto): Promise<Filme> {
    return this.FilmeService.create(createFilmeDto)
  }
  @Post("/createauto")
  async createauto(@Body() filmes: FilmeAutomaticoDto): Promise<void> {
    this.FilmeService.createAutomatico(filmes)
  }
  @Delete("/delete/:id")
  async deleteById(@Param("id") id: string): Promise<void>{
    this.FilmeService.deleteById(id)
  }
  @Delete("/deletenome")
  async deleteManyByName(@Body("nome") nome: string[]): Promise<void>{
    this.FilmeService.deleteManyByName(nome)
  }
}