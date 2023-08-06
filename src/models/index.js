// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { LocalChapter, Institution, user } = initSchema(schema);

export {
  LocalChapter,
  Institution,
  user
};