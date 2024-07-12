import { CategoriaEnum } from "src/enum/categoira.enum"
import { GeneroEnum } from "src/enum/genero.enum"
import { Document } from 'mongoose';

export interface FilmeDto extends Document{
    nome: string 
    ano: number
    capa: string
    generos: GeneroEnum[]
    categorias: CategoriaEnum[]
}

export interface FilmeAutomaticoDto extends Document{
    nomes: string[]
    categorias: CategoriaEnum[]
}

   