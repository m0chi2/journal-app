/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createJournal = /* GraphQL */ `
  mutation CreateJournal(
    $input: CreateJournalInput!
    $condition: ModelJournalConditionInput
  ) {
    createJournal(input: $input, condition: $condition) {
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
export const updateJournal = /* GraphQL */ `
  mutation UpdateJournal(
    $input: UpdateJournalInput!
    $condition: ModelJournalConditionInput
  ) {
    updateJournal(input: $input, condition: $condition) {
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
export const deleteJournal = /* GraphQL */ `
  mutation DeleteJournal(
    $input: DeleteJournalInput!
    $condition: ModelJournalConditionInput
  ) {
    deleteJournal(input: $input, condition: $condition) {
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
