import React from 'react';
import { shallow } from 'enzyme';
import Book from './Book';

describe('<Book />', () => {
	
	it( 'shallow renders correctly', () => {
		//const bookItem = ;
		expect( shallow( <Book book={ { smallThumbnail: '' } } updateBooks={ () => false } /> ) )
	})

});