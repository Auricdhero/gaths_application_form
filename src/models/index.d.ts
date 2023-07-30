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
  readonly othername: string;
  readonly gender: string;
  readonly dob: string;
  readonly country_of_birth: string;
  readonly nationality: string;
  readonly hometown: string;
  readonly region: string;
  readonly addressLine1: string;
  readonly addressLine2: string;
  readonly ghCardNo: string;
  readonly phoneNo: string;
  readonly email: string;
  readonly nameOfInstitution: string;
  readonly institutionRegion: string;
  readonly Prog: string;
  readonly level: string;
  readonly dateStart: string;
  readonly endDate: string;
  readonly studentId: string;
  readonly department: string;
  readonly localChapterName: string;
  readonly PositionsChapter: string;
  readonly dateJoined: string;
  readonly membershipNo: string;
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
  readonly othername: string;
  readonly gender: string;
  readonly dob: string;
  readonly country_of_birth: string;
  readonly nationality: string;
  readonly hometown: string;
  readonly region: string;
  readonly addressLine1: string;
  readonly addressLine2: string;
  readonly ghCardNo: string;
  readonly phoneNo: string;
  readonly email: string;
  readonly nameOfInstitution: string;
  readonly institutionRegion: string;
  readonly Prog: string;
  readonly level: string;
  readonly dateStart: string;
  readonly endDate: string;
  readonly studentId: string;
  readonly department: string;
  readonly localChapterName: string;
  readonly PositionsChapter: string;
  readonly dateJoined: string;
  readonly membershipNo: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type user = LazyLoading extends LazyLoadingDisabled ? Eageruser : Lazyuser

export declare const user: (new (init: ModelInit<user>) => user) & {
  copyOf(source: user, mutator: (draft: MutableModel<user>) => MutableModel<user> | void): user;
}