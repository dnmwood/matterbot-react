import gql from 'graphql-tag';

const org_query = gql`
  {
    organizations {
      id
      title
      description
    }
  }
`;

export default org_query;