import React from 'react';

function BookDetails( props ) {
	const book = props.location.params.book;

	console.log( book );

	return (
		<div className="book">
			<div className="book-top">
				<h2>
					{ book.title }
				</h2>
				<h3>
					{ book.subtitle }
				</h3>
			</div>
			<p>
				{ book.description }
			</p>
			{/* <div className="book-title"> { title }</div>
			{ authors && authors.map( (author, index) => 
				(
					<div key={ index } className="book-authors">{ author } </div>
				)
			)} */}
		</div>
	)
}

export default BookDetails;