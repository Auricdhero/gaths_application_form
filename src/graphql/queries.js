/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      nameOfInstitution
      institutionRegion
      Prog
      level
      dateStart
      endDate
      studentId
      department
      localChapterName
      PositionsChapter
      dateJoined
      membershipNo
      createdAt
      updatedAt
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
        nameOfInstitution
        institutionRegion
        Prog
        level
        dateStart
        endDate
        studentId
        department
        localChapterName
        PositionsChapter
        dateJoined
        membershipNo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;