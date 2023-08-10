/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocalChapter = /* GraphQL */ `
  subscription OnCreateLocalChapter(
    $filter: ModelSubscriptionLocalChapterFilterInput
  ) {
    onCreateLocalChapter(filter: $filter) {
      id
      localChapterName
      PositionsChapter
      dateJoined
      membershipNo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLocalChapter = /* GraphQL */ `
  subscription OnUpdateLocalChapter(
    $filter: ModelSubscriptionLocalChapterFilterInput
  ) {
    onUpdateLocalChapter(filter: $filter) {
      id
      localChapterName
      PositionsChapter
      dateJoined
      membershipNo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLocalChapter = /* GraphQL */ `
  subscription OnDeleteLocalChapter(
    $filter: ModelSubscriptionLocalChapterFilterInput
  ) {
    onDeleteLocalChapter(filter: $filter) {
      id
      localChapterName
      PositionsChapter
      dateJoined
      membershipNo
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateInstitution = /* GraphQL */ `
  subscription OnCreateInstitution(
    $filter: ModelSubscriptionInstitutionFilterInput
  ) {
    onCreateInstitution(filter: $filter) {
      id
      nameOfInstitution
      institutionRegion
      Prog
      level
      dateStart
      endDate
      studentId
      department
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateInstitution = /* GraphQL */ `
  subscription OnUpdateInstitution(
    $filter: ModelSubscriptionInstitutionFilterInput
  ) {
    onUpdateInstitution(filter: $filter) {
      id
      nameOfInstitution
      institutionRegion
      Prog
      level
      dateStart
      endDate
      studentId
      department
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteInstitution = /* GraphQL */ `
  subscription OnDeleteInstitution(
    $filter: ModelSubscriptionInstitutionFilterInput
  ) {
    onDeleteInstitution(filter: $filter) {
      id
      nameOfInstitution
      institutionRegion
      Prog
      level
      dateStart
      endDate
      studentId
      department
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      title
      surname
      firstname
      othername
      gender
      dob
      country_of_birth
      nationality
      hometown
      region
      addressLine1
      addressLine2
      ghCardNo
      phoneNo
      email
      Institution {
        id
        nameOfInstitution
        institutionRegion
        Prog
        level
        dateStart
        endDate
        studentId
        department
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      LocalChapter {
        id
        localChapterName
        PositionsChapter
        dateJoined
        membershipNo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userInstitutionId
      userLocalChapterId
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      title
      surname
      firstname
      othername
      gender
      dob
      country_of_birth
      nationality
      hometown
      region
      addressLine1
      addressLine2
      ghCardNo
      phoneNo
      email
      Institution {
        id
        nameOfInstitution
        institutionRegion
        Prog
        level
        dateStart
        endDate
        studentId
        department
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      LocalChapter {
        id
        localChapterName
        PositionsChapter
        dateJoined
        membershipNo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userInstitutionId
      userLocalChapterId
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      title
      surname
      firstname
      othername
      gender
      dob
      country_of_birth
      nationality
      hometown
      region
      addressLine1
      addressLine2
      ghCardNo
      phoneNo
      email
      Institution {
        id
        nameOfInstitution
        institutionRegion
        Prog
        level
        dateStart
        endDate
        studentId
        department
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      LocalChapter {
        id
        localChapterName
        PositionsChapter
        dateJoined
        membershipNo
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userInstitutionId
      userLocalChapterId
    }
  }
`;
