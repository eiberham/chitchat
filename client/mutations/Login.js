import { gql } from 'apollo-boost';

export default gql`
    mutation Login($email: String!, $password: String!){
        login(email: $email, password: $password){
            id
            name
            gender
            email
        }
    }
`;