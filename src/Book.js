import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Book extends Component {

	changeShelf(valeu, id) {
		console.log(valeu);
		console.log(id);
	}

	render () {
		console.log(this.props.book);
		const {shelf, id, imageLinks, authors, title} = this.props.book;

		return (
			<div className="book">
				{ shelf }
				<div className="book-top">
					<Link to='/details'>
						<div className="book-cover" style={{ width: 128, height: 174, backgroundImage:  `url(${ imageLinks.smallThumbnail })` }}></div>
					</Link>
					<div className="book-shelf-changer">
						<select onChange={ (event) => this.changeShelf(event.target.value , this.props.book.id) } >
							<option value="none" disabled>Move to...</option>
							{ shelf === 'currentlyReading' ?
								(<option value="currentlyReading" selected>Currently Reading</option>) :
								(<option value="currentlyReading">Currently Reading</option>) 
							}
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title"> { this.props.book.title }</div>
				{ this.props.book.authors && this.props.book.authors.map( (author, index) => 
					(
						<div key={ index } className="book-authors">{ author } </div>
					)
				)}
			</div>
		)
	}
}

export default Book;