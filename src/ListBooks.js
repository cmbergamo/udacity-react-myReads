import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Book from './Book'

class ListBooks extends Component {

	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{ this.props.title }</h2>
				<div className="bookshelf-books" >
					{ this.props.books ?
						(
							<ol className="books-grid" >
								{ this.props.books.map( ( book, index ) =>
									(
										<li key={ index } >
											<Book book={ book } updateBooks={ this.props.updateBooks } />
										</li>
									)
								)}
							</ol>
						) : ''
					}
				</div>
					
			</div>

		);
	}
}

ListBooks.propTypes = {
	title: PropTypes.string.isRequired,
	books: PropTypes.array.isRequired,
	updateBooks: PropTypes.func.isRequired
}

export default ListBooks;