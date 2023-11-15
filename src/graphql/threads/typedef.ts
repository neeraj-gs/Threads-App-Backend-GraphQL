export const typeDefs = `#graphql 
    type User{
        id: ID!
        firstName: String!
        lastName: String
        profileImageURL: String
        email: String!
        
    }

`

//we are adding a typefdef because user returns an object wit fields os we ened toadd a typedefs first