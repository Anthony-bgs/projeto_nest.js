import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Pessoa } from './pessoa.interface';
import { PessoaDto } from './pessoa.dto';
import { Constantes } from 'src/constantes';

@Injectable()
export class PessoaService {
  constructor(
    @Inject(Constantes.Modelo_P)
    private PessoaModel: Model<Pessoa>,
  ) {}

  async create(createPessoaDto: PessoaDto): Promise<Pessoa> {
    const createdPessoa = new this.PessoaModel(createPessoaDto);
    return createdPessoa.save();
  }

  async findAll(): Promise<Pessoa[]> {
    return this.PessoaModel.find().exec();
  }
  
  async findID(_id:string): Promise<Pessoa> {
    return this.PessoaModel.findById(_id).exec();
  }


}