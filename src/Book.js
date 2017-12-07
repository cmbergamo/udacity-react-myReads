import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Book extends Component {

	render () {
		const {shelf = false, id, imageLinks, authors, title} = this.props.book;

		return (
			<div className="book">
				<div className="book-top">
					<Link to={{ pathname: '/details', params: {book: this.props.book} }} >
						<div className="book-cover" style={{ width: 128, height: 174, backgroundImage:  `url(${ imageLinks.smallThumbnail })` }}></div>
					</Link>
					<div className="book-shelf-changer">
						<select onChange={ (event) => this.props.updateBooks({ id }, event.target.value) } >
							<option value="none" disabled>Move to...</option>
							<option value="currentlyReading" defaultValue={ shelf === 'currentlyReading' } >Currently Reading</option>
							<option value="wantToRead" defaultValue={ shelf === 'wantToRead' } >Want to Read</option>
							<option value="read" defaultValue={ shelf === 'read' } >Read</option>
							<option value="none" defaultValue={ !shelf } >None</option>
						</select>
					</div>
				</div>
				<div className="book-title"> { title }</div>
				{ authors && authors.map( (author, index) => 
					(
						<div key={ index } className="book-authors">{ author } </div>
					)
				)}
			</div>
		)
	}
}

Book.propTypes = {
	book: PropTypes.object.isRequired,
	updateBooks: PropTypes.func.isRequired
}

export default Book;