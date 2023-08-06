import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerLocalChapter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LocalChapter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly localChapterName?: string | null;
  readonly PositionsChapter?: string | null;
  readonly dateJoined?: string | null;
  readonly membershipNo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLocalChapter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LocalChapter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly localChapterName?: string | null;
  readonly PositionsChapter?: string | null;
  readonly dateJoined?: string | null;
  readonly membershipNo?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LocalChapter = LazyLoading extends LazyLoadingDisabled ? EagerLocalChapter : LazyLocalChapter

export declare const LocalChapter: (new (init: ModelInit<LocalChapter>) => LocalChapter) & {
  copyOf(source: LocalChapter, mutator: (draft: MutableModel<LocalChapter>) => MutableModel<LocalChapter> | void): LocalChapter;
}

type EagerInstitution = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Institution, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nameOfInstitution?: string | null;
  readonly institutionRegion?: string | null;
  readonly dateStart?: string | null;
  readonly endDate?: string | null;
  readonly Prog?: string | null;
  readonly level?: string | null;
  readonly studentId?: string | null;
  readonly department?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInstitution = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Institution, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nameOfInstitution?: string | null;
  readonly institutionRegion?: string | null;
  readonly dateStart?: string | null;
  readonly endDate?: string | null;
  readonly Prog?: string | null;
  readonly level?: string | null;
  readonly studentId?: string | null;
  readonly department?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Institution = LazyLoading extends LazyLoadingDisabled ? EagerInstitution : LazyInstitution

export declare const Institution: (new (init: ModelInit<Institution>) => Institution) & {
  copyOf(source: Institution, mutator: (draft: MutableModel<Institution>) => MutableModel<Institution> | void): Institution;
}

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
  readonly Institution?: Institution | null;
  readonly LocalChapter?: LocalChapter | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userInstitutionId?: string | null;
  readonly userLocalChapterId?: string | null;
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
  readonly Institution: AsyncItem<Institution | undefined>;
  readonly LocalChapter: AsyncItem<LocalChapter | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userInstitutionId?: string | null;
  readonly userLocalChapterId?: string | null;
}

export declare type user = LazyLoading extends LazyLoadingDisabled ? Eageruser : Lazyuser

export declare const user: (new (init: ModelInit<user>) => user) & {
  copyOf(source: user, mutator: (draft: MutableModel<user>) => MutableModel<user> | void): user;
}