import { Connection } from 'mongoose';
import { FilmeSchema } from './filme.schema';
import { Constantes } from 'src/constantes';


export const FilmeProvider = [
  {
    provide: Constantes.Modelo_F,
    useFactory: (connection: Connection) => connection.model('Filme', FilmeSchema),
    inject: [Constantes.dataBaseConnection],
  },
];