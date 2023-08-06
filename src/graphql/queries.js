/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocalChapter = /* GraphQL */ `
  query GetLocalChapter($id: ID!) {
    getLocalChapter(id: $id) {
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
export const listLocalChapters = /* GraphQL */ `
  query ListLocalChapters(
    $filter: ModelLocalChapterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocalChapters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncLocalChapters = /* GraphQL */ `
  query SyncLocalChapters(
    $filter: ModelLocalChapterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocalChapters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getInstitution = /* GraphQL */ `
  query GetInstitution($id: ID!) {
    getInstitution(id: $id) {
      id
      nameOfInstitution
      institutionRegion
      dateStart
      endDate
      Prog
      level
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
export const listInstitutions = /* GraphQL */ `
  query ListInstitutions(
    $filter: ModelInstitutionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstitutions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nameOfInstitution
        institutionRegion
        dateStart
        endDate
        Prog
        level
        studentId
        department
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInstitutions = /* GraphQL */ `
  query SyncInstitutions(
    $filter: ModelInstitutionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInstitutions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nameOfInstitution
        institutionRegion
        dateStart
        endDate
        Prog
        level
        studentId
        department
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
        dateStart
        endDate
        Prog
        level
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          dateStart
          endDate
          Prog
          level
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          dateStart
          endDate
          Prog
          level
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
      nextToken
      startedAt
    }
  }
`;
