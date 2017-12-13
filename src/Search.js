import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import escapeRegExp from 'escape-string-regexp';
import { Debounce } from 'react-throttle';
import ListBooks from './ListBooks';

class Search extends Component {
	
	state = {
		query: '',
		books: []
	}
	
	changeQuery = ( event ={} ) => {
		const target = event.target || {} ;
		const value = escapeRegExp( target.value || '' );

		this.setState( { query: value } );
		
		this.updateSearch( value );

	}

	updateSearch = ( value ) => {
		if (value) {
			BooksAPI.search( value ).then( books => {

				if ( books && !books.error ) {

					const resolvedBook = books.map( book => {

						this.props.selecteds.find( element => {
							if ( book.id === element.id ) {
								book.shelf = element.shelf;

								return true;
							}

							return false;
						});

						;

						// for ( const selectedBook of this.props.selecteds ) {
						// 	if (book.id === selectedBook.id) {
						// 		book.shelf = selectedBook.shelf;

						// 		break;
						// 	}
						// }
						
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
						<Debounce time="300" handler="onChange">
							<input type="text" placeholder="Search by title or author" onChange={ this.changeQuery } />
						</Debounce>
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