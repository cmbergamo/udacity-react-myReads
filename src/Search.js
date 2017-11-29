import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI'

class Search extends Component {
	state = {
		query: '',
		books: []
	}

	// books = [];
	
	changeQuery = ( event ) => {
		const value = event.target.value;

		this.setState( { query: value } );
		
		this.updateBooks( value );

	}

	updateBooks = value => {
		if (value) {
			BooksAPI.search( value ).then( books => {
				this.setState( { books } );
				console.log(this.state.books);
			});
		} else {
			this.setState( { books: [] });
		}
	}

	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className='close-search' to='/' >Close</Link>
					<div className="search-books-input-wrapper">
						{/*
						NOTES: The search from BooksAPI is limited to a particular set of search terms.
						You can find these search terms here:
						https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

						However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
						you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input type="text" placeholder="Search by title or author" onChange={ this.changeQuery } />
					</div>
				</div>
				<div className="search-books-results">
					{ this.state.books.length > 0 && (
						<ListBooks title='Result' books={ this.state.books }/>
					)}
					{/* <ol className="books-grid">
					{ this.state.books.map(
						book => {
						return ( <li> {book.title} </li>);
						}
					)}
					</ol> */}
				</div> 
			</div>
		)
	}
}

export default Search;