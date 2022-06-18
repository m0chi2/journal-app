/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getJournal = /* GraphQL */ `
  query GetJournal($id: ID!) {
    getJournal(id: $id) {
      id
      name
      description
      publisher
      issn
      thumbnail
      createdAt
      updatedAt
    }
  }
`;
export const listJournals = /* GraphQL */ `
  query ListJournals(
    $filter: ModelJournalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJournals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        publisher
        issn
        thumbnail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
