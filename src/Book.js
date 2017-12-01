import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Book extends Component {

	render () {
		const {shelf = false, id, imageLinks, authors, title} = this.props.book;

		return (
			<div className="book">
				<div className="book-top">
					<Link to='/details'>
						<div className="book-cover" style={{ width: 128, height: 174, backgroundImage:  `url(${ imageLinks.smallThumbnail })` }}></div>
					</Link>
					<div className="book-shelf-changer">
						<select onChange={ (event) => this.props.updateBooks(id, event.target.value) } >
							<option value="none" disabled>Move to...</option>
							{ shelf === 'currentlyReading' ?
								(<option value="currentlyReading" disabled>Currently Reading</option>) :
								(<option value="currentlyReading">Currently Reading</option>) 
							}
							{ shelf === 'wantToRead' ?
								(<option value="wantToRead" disabled>Want to Read</option>) :
								(<option value="wantToRead">Want to Read</option>) 
							}
							{ shelf === 'read' ?
								(<option value="read" disabled>Read</option>) :
								(<option value="read">Read</option>) 
							}
							{ !shelf  ?
								(<option value="none" disabled>None</option>) :
								(<option value="none">None</option>) 
							}
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

export default Book;