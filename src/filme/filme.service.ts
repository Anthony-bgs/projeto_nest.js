import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Filme } from './filme.interface';
import { FilmeDto } from './filme.dto';
import { Constantes } from 'src/constantes';

@Injectable()
export class FilmeService {
  constructor(
    @Inject(Constantes.Modelo_F)
    private FilmeModel: Model<Filme>,
  ) {}

  async create(createFilmeDto: FilmeDto): Promise<Filme> {
    const createdFilme = new this.FilmeModel(createFilmeDto);
    return createdFilme.save();
  }

  async findAll(): Promise<Filme[]> {
    return this.FilmeModel.find().exec();
  }
  
  async findID(_id:string): Promise<Filme> {
    return this.FilmeModel.findById({_id: _id}).exec();
  }
}