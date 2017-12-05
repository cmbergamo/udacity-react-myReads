import React from 'react';
import { Link } from 'react-router-dom'

function BookDetails( props ) {
	console.log( props );
	return (
		<div className="book">
			<div className="book-top">
				<Link to='/details'>
					{/* <div className="book-cover" style={{ width: 128, height: 174, backgroundImage:  `url(${ imageLinks.smallThumbnail })` }}></div> */}
				</Link>
			</div>
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