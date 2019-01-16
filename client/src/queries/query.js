import {gql} from 'apollo-boost';

const getBooksQuery = gql`
  {
    books {
      name, 
      id
    }
  }
`;

const getAuthorQuery = gql`
  {
    authors {
      name,
      id
    }
  }
`;

const addBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: String!){
    addBook(name: $name, genre: $genre, authorId: $authorId){
      name,
      id
    }
  }
`;

export {getBooksQuery, getAuthorQuery, addBookMutation};