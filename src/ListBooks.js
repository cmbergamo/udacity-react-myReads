import React from 'react'
import Book from './Book'

function ListBooks( props ) {

	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{ props.title }</h2>
			<div className="bookshelf-books">
				{ props.books ?
					(
						<ol className="books-grid">
							{ props.books.map( ( book, index ) => (
									<li key={ index } >
										<Book book={ book } />
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

export default ListBooks;