import React, { Component } from 'react';
import {graphql, compose} from 'react-apollo';
import { getAuthorQuery, addBookMutation, getBooksQuery } from '../queries/query';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      genre: '',
      authorId: '', 
    }
  }
  
  handleChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        name: this.state.name,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries : [{ query : getBooksQuery}]
    });
  }

  displayAuthors() {
    const {loading, authors} = this.props.getAuthorQuery
    if(loading) {
      return <option disabled>Loading Authors...</option>
    } else {
      return authors && authors.map(author => (
        <option key={author.id} value={author.id}>{author.name}</option>
      ))
    }
  }
  
  render() {
    return (
      <form id="add-book" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" name="name" onChange={this.handleChange}/>
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" name="genre" onChange={this.handleChange}/>
        </div>
        <div className="field">
          <label>Author:</label>
          <select name="authorId" onChange={this.handleChange}>
            <option>Select author</option>
              { this.displayAuthors() }
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorQuery, {name: "getAuthorQuery"}),
  graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);