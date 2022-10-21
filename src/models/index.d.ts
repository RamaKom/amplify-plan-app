import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type PlanSponsorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class PlanSponsor {
  readonly id: string;
  readonly name: string;
  readonly about?: string | null;
  readonly logoimage?: string | null;
  readonly colortheme?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PlanSponsor, PlanSponsorMetaData>);
  static copyOf(source: PlanSponsor, mutator: (draft: MutableModel<PlanSponsor, PlanSponsorMetaData>) => MutableModel<PlanSponsor, PlanSponsorMetaData> | void): PlanSponsor;
}