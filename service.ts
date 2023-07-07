import { graphql } from './generated';
import type { Account } from './generated/graphql';

const getAccountsQuery = graphql(/* GraphQL */ `
  query Accounts {
    accounts {
      id
      name
    }
  }
`);

const getAccountQuery = graphql(/* GraphQL */ `
  query Account($id: ID!) {
    account(id: $id) {
      id
      name
    }
  }
`);
