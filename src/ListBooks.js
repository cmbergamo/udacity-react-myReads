import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types';

function ListBooks( props ) {

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{ props.title }</h2>
			<div className="bookshelf-books">
				{ props.books ?
					(
						<ol className="books-grid">
							{ props.books.map( ( book, index ) =>
								(
									<li key={ index } >
										<Book book={ book } updateBooks={ props.updateBooks } />
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

ListBooks.propTypes = {
	title: PropTypes.string.isRequired,
	books: PropTypes.array.isRequired,
	updateBooks: PropTypes.func.isRequired
}

export default ListBooks;