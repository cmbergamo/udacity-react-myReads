import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListBooks from './ListBooks';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import escapeRegExp from 'escape-string-regexp';

class Search extends Component {
	
	state = {
		query: '',
		books: []
	}
	
	changeQuery = ( event ={} ) => {
		const target = event.target | {} ;
		const value = escapeRegExp( event.target.value );

		this.setState( { query: value } );
		
		this.updateSearch( value );

	}

	updateSearch = ( value ) => {
		if (value) {
			BooksAPI.search( value ).then( books => {

				if ( books ) {
					const resolvedBook = books.map( book => {

						for ( const selectedBook of this.props.selecteds ) {
							if (book.id === selectedBook.id) {
								book.shelf = selectedBook.shelf;

								break;
							}
						}
						
						return book;
					});

					this.setState( { books: resolvedBook } );
				} else {
					this.setState( { books: [] } );
				}
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
						<ListBooks title='Result' books={ this.state.books } updateBooks={ this.props.updateBooks } />
					)}
				</div> 
			</div>
		)
	}
}

Search.propTypes = {
	updateBooks: PropTypes.func.isRequired
}

export default Search;