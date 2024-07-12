import { CategoriaEnum } from "src/enum/categoira.enum"
import { GeneroEnum } from "src/enum/genero.enum"

export interface Filme {
    nome: string
    ano: string
    duracao: string
    generos: GeneroEnum[]
    categorias: CategoriaEnum[]
    diretor: string
    atores: string
    sinopse: string
    capa: string
    avaliacao: Avaliacao[]
    _id?: string
}

interface Avaliacao {
    Source: string
    Value: string
}