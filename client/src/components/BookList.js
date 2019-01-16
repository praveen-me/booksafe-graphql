import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import { getBooksQuery } from '../queries/query';
import BookDetails from './BookDetails';



class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }
  
  handleClick = e => {
    this.setState({
      selected: e.target.id
    });
  }

  displayBooks() {
    const {loading, books} = this.props.data
    if(loading) {
      return <p>Loading...</p>
    } else {
      return books && books.map(book => (
        <li key={book.id} id={book.id} onClick={this.handleClick}>{book.name}</li>
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
        <BookDetails selectedBook={this.state.selected}/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);