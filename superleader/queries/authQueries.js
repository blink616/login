import {gql} from "@apollo/client"
const addUser = gql`
mutation AddUser($username:String!,$password:String!,$email:String!){
  createUser(userInput:{username:$username,password:$password,email:$email}) {
    username
    password
    email
  }
}
`;
export {addUser}