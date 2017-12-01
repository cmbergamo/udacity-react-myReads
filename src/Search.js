import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListBooks from './ListBooks';
import * as BooksAPI from './BooksAPI'

class Search extends Component {
	state = {
		query: '',
		books: []
	}
	
	changeQuery = ( event ) => {
		const value = event.target.value;

		this.setState( { query: value } );
		
		this.updateBooks( value );

	}

	updateBooks = value => {
		if (value) {
			BooksAPI.search( value ).then( books => {
				this.setState( { books } );
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
						<input type="text" placeholder="Search by title or author" onChange={ this.changeQuery } />
					</div>
				</div>
				<div className="search-books-results">
					{ this.state.books.length > 0 && (
						<ListBooks title='Result' books={ this.state.books }/>
					)}
				</div> 
			</div>
		)
	}
}

export default Search;