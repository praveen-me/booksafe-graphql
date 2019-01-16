import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import { getBooksQuery } from '../queries/query';



class BookList extends Component {
  displayBooks() {
    const {loading, books} = this.props.data
    if(loading) {
      return <p>Loading...</p>
    } else {
      return books && books.map(book => (
        <li key={book.id}>{book.name}</li>
      ))
    }
  }
  
  render() {
    console.log(this.props);
    return (
      <div>
        <ul id="book-list">
        {
          this.displayBooks()
        }
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);