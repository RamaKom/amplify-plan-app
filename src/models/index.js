// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PlanSponsor } = initSchema(schema);

export {
  PlanSponsor
};