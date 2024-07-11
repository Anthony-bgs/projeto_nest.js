import { CategoriaEnum } from "src/enum/categoira.enum"
import { GeneroEnum } from "src/enum/genero.enum"
import { Document } from 'mongoose';

export interface PessoaDto extends Document{
    nome: string 
    email: string
    senha: string
    // idade: number
    // foto: string
    // categorias_favoritos: CategoriaEnum[]
    // generos_favoritos: GeneroEnum[]
}