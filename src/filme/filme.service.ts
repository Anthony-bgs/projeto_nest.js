import { Model } from 'mongoose';
import { Injectable, Inject, ConsoleLogger } from '@nestjs/common';
import { Filme } from './filme.interface';
import { RetornoOmdb } from './retornoOMDb.interface';
import { FilmeAutomaticoDto, FilmeDto } from './filme.dto';
import { Constantes } from 'src/constantes';
import { HttpService } from '@nestjs/axios';
import { catchError, count, firstValueFrom, tap, } from 'rxjs';
import { AxiosError } from 'axios';
import { CategoriaEnum } from 'src/enum/categoira.enum';
import { GeneroEnum } from 'src/enum/genero.enum';
import { Console } from 'console';

@Injectable()
export class FilmeService {
	constructor(
		@Inject(Constantes.Modelo_F)
		private FilmeModel: Model<Filme>,
		private readonly httpService: HttpService
	) { }

	async create(createFilmeDto: FilmeDto): Promise<Filme> {
		const createdFilme = new this.FilmeModel(createFilmeDto);
		return createdFilme.save();
	}

	async findAll(): Promise<Filme[]> {
		return this.FilmeModel.find().exec();
	}

	async findID(_id: string): Promise<Filme> {
		return this.FilmeModel.findById({ _id: _id }).exec();
	}
	async deleteById(_id: string): Promise<Filme> {
		return this.FilmeModel.findByIdAndDelete({ _id: _id }).exec();
	}
	async deleteManyByName(nomes: string[]): Promise<void> {
		nomes.forEach(async nome => {
			var contador = await this.FilmeModel.countDocuments({ nome: nome.toLowerCase() })
			while (contador > 1) {
				await this.FilmeModel.findOneAndDelete({ nome: nome })
				contador--
			}
		})
	}


	async createAutomatico(filmes: FilmeAutomaticoDto): Promise<void> {
		//no objeto filmes tem o item nome que é um array de string contendo nomes de filmes, percorrer o array para executar
		//o sistema de verificação e reigistro em cima de cada nome recebido
		//forEach é um loop
		filmes.nomes.forEach(async nome => {
			// procurar todos os filmes que contenham o nome passado por parametro
			const filme = await this.FilmeModel.find({ nome: { $regex: nome, $options: "i" } }).exec();

			//verificar quantos filmes foram retornados e caso seja igual a 0 seguir com o processo
			if (filme.length == 0) {
				//faz a requisição na API externa para retornar as informações dos filmes
				const { data } = await firstValueFrom(
					this.httpService.get<RetornoOmdb>(`${process.env.URL_OMDB}${nome}`).pipe(),
				);

				//monta o novo objeto de acordo com os parametros do sistema
				const novoFilme: Filme = {
					nome: data.Title.toLowerCase(),
					ano: data.Year,
					duracao: data.Runtime,
					generos: this.montarGeneros(data.Genre),
					categorias: filmes.categorias,
					diretor: data.Director,
					atores: data.Actors,
					sinopse: data.Plot,
					capa: data.Poster,
					avaliacao: data.Ratings
				}
				
				try {
					const createdFilme = new this.FilmeModel(novoFilme);					
					//salva no banco de dados o novo objeto de filme
					await createdFilme.save();
				} catch (error) {
					console.log({nome: data.Title, generos: data.Genre});
				}

			} else {
				console.log("Esse titulo ja cadastrado ===> ", nome);
			}
		});
	}

	private montarGeneros(generos: string): GeneroEnum[] {
		var generosList = generos.split(",");
		const newListgeneros = [];

		generosList.forEach(item => {
			newListgeneros.push(GeneroEnum[item.trim().toLocaleLowerCase()])
		});

		return newListgeneros;
	}
}