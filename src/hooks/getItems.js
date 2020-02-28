import gql from 'graphql-tag';

export const GET_ITEMS = gql`
  query getItems {
    items {
      description
    }
  }
`;