import { Document, Schema, SchemaType } from "mongoose";
import { CategoriaEnum } from 'src/enum/categoira.enum';
import { GeneroEnum } from 'src/enum/genero.enum';

export const FilmeSchema = new Schema({
    nome: { type: String, required: true },
    ano: { type: String, required: true },
    capa: { type: String, required: true },
    categorias: [{ type: String, enum: Object.values(CategoriaEnum), required: true }],
    generos:  [{ type: String, enum: Object.values (GeneroEnum), required: true }],
    duracao: { type: String, required: true },
    diretor: { type: String, required: true },
    atores: { type: String, required: true },
    sinopse: { type: String, required: true },
    avaliacao: [{ type: Object, required: true }]
},{
    timestapms: true,
    collection: "Filme"
});