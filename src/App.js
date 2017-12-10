import React from 'react'
import { Route, Link } from 'react-router-dom'

//Import Self Development Components
import ListBooks from './ListBooks'
import Search from './Search'
import BookDetails from './BookDetails'

//Import data manipulation API
import * as BooksAPI from './BooksAPI'

//Import CSS's
import './App.css'


class BooksApp extends React.Component {
	
	state = {
		books : []
	}

	componentDidMount() {
		BooksAPI.getAll().then( books => {
			this.setState( { books } );
		});
	}

	updateBooks = (book, shelf) => {

		BooksAPI.update(book, shelf).then(booksIDs =>
			{

				BooksAPI.getAll().then( books => {
					 this.setState( { books } )
				});
			}
		);

	}

	render() {
		let currentlyReading	= [];
		let wantToRead			= [];
		let read				= [];

		if ( this.state.books ) {
			currentlyReading = this.state.books.filter( book => {
				return ( book.shelf === 'currentlyReading' )
			});

			wantToRead = this.state.books.filter( book => {
				return ( book.shelf === 'wantToRead' )
			});

			read = this.state.books.filter( book => {
				return ( book.shelf === 'read' )
			});
		}

		return (
			<div className="app">
				<Route exact path='/' render={ () => (
					<div className="list-books">
						<div className="list-books-title">
							<h1>MyReads</h1>
						</div>
						<div className="list-books-content">
							<div>

								<ListBooks title='Currently Reading' books={ currentlyReading } updateBooks={ this.updateBooks } id='currentlyReading' />
							
								<ListBooks title='Want to Read' books={ wantToRead } updateBooks={ this.updateBooks } id='wantToRead' />
								<ListBooks title='Read' books={ read } updateBooks={ this.updateBooks } id='read' />
							</div>
						</div>
						<div className="open-search">
							<Link to='/search' >Add a book</Link>
						</div>
					</div>
				)} /> 
				<Route path='/search' render={ () =>
					(
						<Search updateBooks={ this.updateBooks } selecteds={ this.state.books } />
					)
				} />

				<Route path='/details' component={ BookDetails } />
			</div>
		)
	}
}

export default BooksApp
