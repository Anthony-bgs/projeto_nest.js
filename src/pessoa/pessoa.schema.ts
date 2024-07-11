import * as mongoose from 'mongoose';
import { CategoriaEnum } from 'src/enum/categoira.enum';
import { GeneroEnum } from 'src/enum/genero.enum';

export const PessoaSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    idade: { type: Number, required: false },
    foto: { type: String, required: false },
    categorias_favoritos: [{ type: String, enum: Object.values(CategoriaEnum), required: false }],
    generos_favoritos:  [{ type: String, enum: Object.values(GeneroEnum), required: false }]
}, {
    timestapms: true,
    collection: "Pessoa"
});