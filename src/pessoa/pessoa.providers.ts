import { Connection } from 'mongoose';
import { PessoaSchema } from './pessoa.schema';
import { Constantes } from 'src/constantes';


export const PessoaProvider = [
  {
    provide: Constantes.Modelo_P,
    useFactory: (connection: Connection) => connection.model('Pessoa', PessoaSchema),
    inject: [Constantes.dataBaseConnection],
  },
];