/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateJournalInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  publisher?: string | null,
  issn?: number | null,
  thumbnail?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelJournalConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  publisher?: ModelStringInput | null,
  issn?: ModelIntInput | null,
  thumbnail?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelJournalConditionInput | null > | null,
  or?: Array< ModelJournalConditionInput | null > | null,
  not?: ModelJournalConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Journal = {
  __typename: "Journal",
  id: string,
  name: string,
  description?: string | null,
  publisher?: string | null,
  issn?: number | null,
  thumbnail?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateJournalInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  publisher?: string | null,
  issn?: number | null,
  thumbnail?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteJournalInput = {
  id: string,
};

export type ModelJournalFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  publisher?: ModelStringInput | null,
  issn?: ModelIntInput | null,
  thumbnail?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelJournalFilterInput | null > | null,
  or?: Array< ModelJournalFilterInput | null > | null,
  not?: ModelJournalFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelJournalConnection = {
  __typename: "ModelJournalConnection",
  items:  Array<Journal | null >,
  nextToken?: string | null,
};

export type CreateJournalMutationVariables = {
  input: CreateJournalInput,
  condition?: ModelJournalConditionInput | null,
};

export type CreateJournalMutation = {
  createJournal?:  {
    __typename: "Journal",
    id: string,
    name: string,
    description?: string | null,
    publisher?: string | null,
    issn?: number | null,
    thumbnail?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateJournalMutationVariables = {
  input: UpdateJournalInput,
  condition?: ModelJournalConditionInput | null,
};

export type UpdateJournalMutation = {
  updateJournal?:  {
    __typename: "Journal",
    id: string,
    name: string,
    description?: string | null,
    publisher?: string | null,
    issn?: number | null,
    thumbnail?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteJournalMutationVariables = {
  input: DeleteJournalInput,
  condition?: ModelJournalConditionInput | null,
};

export type DeleteJournalMutation = {
  deleteJournal?:  {
    __typename: "Journal",
    id: string,
    name: string,
    description?: string | null,
    publisher?: string | null,
    issn?: number | null,
    thumbnail?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetJournalQueryVariables = {
  id: string,
};

export type GetJournalQuery = {
  getJournal?:  {
    __typename: "Journal",
    id: string,
    name: string,
    description?: string | null,
    publisher?: string | null,
    issn?: number | null,
    thumbnail?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListJournalsQueryVariables = {
  filter?: ModelJournalFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListJournalsQuery = {
  listJournals?:  {
    __typename: "ModelJournalConnection",
    items:  Array< {
      __typename: "Journal",
      id: string,
      name: string,
      description?: string | null,
      publisher?: string | null,
      issn?: number | null,
      thumbnail?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateJournalSubscription = {
  onCreateJournal?:  {
    __typename: "Journal",
    id: string,
    name: string,
    description?: string | null,
    publisher?: string | null,
    issn?: number | null,
    thumbnail?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateJournalSubscription = {
  onUpdateJournal?:  {
    __typename: "Journal",
    id: string,
    name: string,
    description?: string | null,
    publisher?: string | null,
    issn?: number | null,
    thumbnail?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteJournalSubscription = {
  onDeleteJournal?:  {
    __typename: "Journal",
    id: string,
    name: string,
    description?: string | null,
    publisher?: string | null,
    issn?: number | null,
    thumbnail?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
