import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book.js'
import Shelf from '../Shelf'


class SearchPage extends Component {

	updateSearch = (query) => {
	  	this.setState({query: query})
	  	this.updateSearched(query);
	  }

  /*updateSearched = (query)=> {
  		BooksAPI.search(query).then((searchResults)=>
        this.setState(searchResults:searchResults))
      if(query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i') //remove this.state
      let searchResults = this.state.books.filter((books)=> match.test(this.state.books.title || this.state.books.author)) //filter to match search
      console.log({searchResults});
      this.state.searchResults.sort(sortBy('title'))
    } else{
      this.setState({searchResults: []})
    }}*/

	render() {
      
		return (
          <div className="search-books">
            <div className="search-books-bar">
              <NavLink to= '/'	className="close-search">Close</NavLink>
              <div className="search-books-input-wrapper">
              {/*{JSON.stringify(this.state.query)}*/}
               <input //update state and value of input field
               className="search-text"
               	type="text" //user enters text
               	placeholder="Search by title or author"
               	value={this.query} //calls setState to merge new state- rerender
               	onChange={(e) => this.updateSearch(e.target.value)} 
               	/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"> {/*display books matching searchResults*/}
              		{this.props.searchResults.map(searchResult => {
                    //{this.state.books.map((book) => {book.id === searchResult.id ? this.currentShelf = book.shelf : ""})
                    return(
                          <li key={searchResult.id}> 
                            <Book book={searchResult}
                            updateShelf={this.props.updateShelf}
                            currentShelf= {this.shelf}
                           />
                          </li>) 
                        }) }
              	</ol>
            </div>
          </div>
        );
	}
} 

export default SearchPage;
