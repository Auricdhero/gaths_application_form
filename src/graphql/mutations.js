/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocalChapter = /* GraphQL */ `
  mutation CreateLocalChapter(
    $input: CreateLocalChapterInput!
    $condition: ModelLocalChapterConditionInput
  ) {
    createLocalChapter(input: $input, condition: $condition) {
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
export const updateLocalChapter = /* GraphQL */ `
  mutation UpdateLocalChapter(
    $input: UpdateLocalChapterInput!
    $condition: ModelLocalChapterConditionInput
  ) {
    updateLocalChapter(input: $input, condition: $condition) {
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
export const deleteLocalChapter = /* GraphQL */ `
  mutation DeleteLocalChapter(
    $input: DeleteLocalChapterInput!
    $condition: ModelLocalChapterConditionInput
  ) {
    deleteLocalChapter(input: $input, condition: $condition) {
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
export const createInstitution = /* GraphQL */ `
  mutation CreateInstitution(
    $input: CreateInstitutionInput!
    $condition: ModelInstitutionConditionInput
  ) {
    createInstitution(input: $input, condition: $condition) {
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
export const updateInstitution = /* GraphQL */ `
  mutation UpdateInstitution(
    $input: UpdateInstitutionInput!
    $condition: ModelInstitutionConditionInput
  ) {
    updateInstitution(input: $input, condition: $condition) {
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
export const deleteInstitution = /* GraphQL */ `
  mutation DeleteInstitution(
    $input: DeleteInstitutionInput!
    $condition: ModelInstitutionConditionInput
  ) {
    deleteInstitution(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
