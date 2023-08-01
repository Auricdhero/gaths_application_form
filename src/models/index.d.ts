import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type Eageruser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<user, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly surname: string;
  readonly firstname: string;
  readonly othername?: string | null;
  readonly gender: string;
  readonly dob: string;
  readonly country_of_birth?: string | null;
  readonly nationality?: string | null;
  readonly hometown?: string | null;
  readonly region?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly ghCardNo: string;
  readonly phoneNo: string;
  readonly email: string;
  readonly nameOfInstitution?: string | null;
  readonly institutionRegion?: string | null;
  readonly Prog?: string | null;
  readonly level?: string | null;
  readonly dateStart?: string | null;
  readonly endDate?: string | null;
  readonly studentId?: string | null;
  readonly department?: string | null;
  readonly localChapterName?: string | null;
  readonly PositionsChapter?: string | null;
  readonly dateJoined?: string | null;
  readonly membershipNo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type Lazyuser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<user, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly surname: string;
  readonly firstname: string;
  readonly othername?: string | null;
  readonly gender: string;
  readonly dob: string;
  readonly country_of_birth?: string | null;
  readonly nationality?: string | null;
  readonly hometown?: string | null;
  readonly region?: string | null;
  readonly addressLine1?: string | null;
  readonly addressLine2?: string | null;
  readonly ghCardNo: string;
  readonly phoneNo: string;
  readonly email: string;
  readonly nameOfInstitution?: string | null;
  readonly institutionRegion?: string | null;
  readonly Prog?: string | null;
  readonly level?: string | null;
  readonly dateStart?: string | null;
  readonly endDate?: string | null;
  readonly studentId?: string | null;
  readonly department?: string | null;
  readonly localChapterName?: string | null;
  readonly PositionsChapter?: string | null;
  readonly dateJoined?: string | null;
  readonly membershipNo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type user = LazyLoading extends LazyLoadingDisabled ? Eageruser : Lazyuser

export declare const user: (new (init: ModelInit<user>) => user) & {
  copyOf(source: user, mutator: (draft: MutableModel<user>) => MutableModel<user> | void): user;
}