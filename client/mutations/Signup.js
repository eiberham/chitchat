import { gql } from 'apollo-boost';

export default gql`
    mutation Signup($email: String!, $name: String!, $gender: String!, $password: String!){
        signup(email: $email, name: $name, gender: $gender, password: $password){
            id
            name
            gender
            email
        }
    }
`;