import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


const ORGANIZATIONS_QUERY = gql`
  {
    organizations {
      id
      title
      description
    }
  }
`;

class Organizations extends Component {
    render() {
      return (
        <Query query={ORGANIZATIONS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching..</div>
            if (error) return <div>Error!</div>
            
            return (
              <div>
                {data.organizations.map((org) => {
                  return <div key={org.id}>
                           <div>{org.title}</div>
                           <p>{org.description}</p>
                        </div>
                })}
              </div>
            )
          }}
        </Query>
      )
    }
  }
  
  export default Organizations;