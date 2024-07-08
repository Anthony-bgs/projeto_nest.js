import { CategoriaEnum } from "src/enum/categoira.enum"
import { GeneroEnum } from "src/enum/genero.enum"

export interface Pessoa {
    nome: string 
    email: string
    senha: string
    idade?: number
    foto?: string
    categorias_favoritos?: CategoriaEnum[]
    generos_favoritos?: GeneroEnum[]
    _id?: string
}