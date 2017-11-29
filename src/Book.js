import React from 'react';
import { Link } from 'react-router-dom'

function Book( props ) {

	return (
		<div className="book">
			<div className="book-top">
				<Link to='/details'>
					<div className="book-cover" style={{ width: 128, height: 174, backgroundImage:  `url(${ props.book.imageLinks.smallThumbnail })` }}></div>
				</Link>
				<div className="book-shelf-changer">
					<select>
						<option value="none" disabled>Move to...</option>
						<option value="currentlyReading">Currently Reading</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
				</div>
			</div>
			<div className="book-title"> { props.book.title }</div>
			{ props.book.authors && props.book.authors.map( (author, index) => 
				(
					<div key={ index } className="book-authors">{ author } </div>
				)
			)}
		</div>
	)
}

export default Book;