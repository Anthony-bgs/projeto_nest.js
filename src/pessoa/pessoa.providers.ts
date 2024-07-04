import { Connection } from 'mongoose';
import { CatSchema } from './schemas/cat.schema';
import { Constantes } from 'src/constantes';

export const catsProviders = [
  {
    provide: 'CAT_MODEL',
    useFactory: (connection: Connection) => connection.model('Cat', CatSchema),
    inject: [Constantes.dataBaseConnection],
  },
];