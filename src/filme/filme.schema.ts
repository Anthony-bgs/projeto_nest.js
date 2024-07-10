import * as mongoose from 'mongoose';
import { CategoriaEnum } from 'src/enum/categoira.enum';
import { GeneroEnum } from 'src/enum/genero.enum';

export const FilmeSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    ano: { type: String, required: true },
    capa: { type: String, required: true },
    categorias: [{ type: String, enum: Object.values(CategoriaEnum), required: false }],
    generos:  [{ type: String, enum: Object.values(GeneroEnum), required: false }]
}, {
    timestapms: true,
    collection: "Filme"
});