import { CategoriaEnum } from "src/enum/categoira.enum"
import { GeneroEnum } from "src/enum/genero.enum"

export interface Filme {
    nome: string 
    ano: number
    capa: string
    generos: GeneroEnum[]
    categorias: CategoriaEnum[]
    _id?: string
}