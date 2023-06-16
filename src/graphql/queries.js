/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMembers = /* GraphQL */ `
  query GetMembers($id: ID!) {
    getMembers(id: $id) {
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
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMembersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
