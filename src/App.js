import React from 'react'
import ListBooks from './ListBooks'
import Search from './Search'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {
	state = {
		/**
		 * TODO: Instead of using this state variable to keep track of which page
		 * we're on, use the URL in the browser's address bar. This will ensure that
		 * users can use the browser's back and forward buttons to navigate between
		 * pages, as well as provide a good URL they can bookmark and share.
		 */
		books : []
	}

	componentDidMount() {
		BooksAPI.getAll().then( books => {
			this.setState( { books } );
		});
	}

	render() {

		const currentlyReading = this.state.books.filter( book => {
			return ( book.shelf === 'currentlyReading' )
		});

		const wantToRead = this.state.books.filter( book => {
			return ( book.shelf === 'wantToRead' )
		});

		const read = this.state.books.filter( book => {
			return ( book.shelf === 'read' )
		});

		return (
			<div className="app">
				<Route exact path='/' render={ () => (
					<div className="list-books">
						<div className="list-books-title">
							<h1>MyReads</h1>
						</div>
						<div className="list-books-content">
							<div>
								<ListBooks  title='Currently Reading' books={ currentlyReading } />
								<ListBooks title='Want to Read' books={ wantToRead }/>
								<ListBooks title='Read' books={ read }/>
							</div>
						</div>
						<div className="open-search">
							<Link to='/search' >Add a book</Link>
						</div>
					</div>
				)} /> 
				<Route path='/search' component={ Search } />
			</div>
		)
	}
}

export default BooksApp
