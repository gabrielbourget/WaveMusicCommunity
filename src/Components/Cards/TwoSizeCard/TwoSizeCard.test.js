import React from 'react';
import ReactDOM from 'react-dom';
import TwoSizeCard from './TwoSizeCard';

const testArtist =   {
  name: 'Yedgar',
  imageURL: process.env.PUBLIC_URL + '/Images/Yedgar.jpg',
  socialURLs: {
    spotify: 'https://open.spotify.com/artist/0YB8v04fVMgWFl9Nqdrqna',
    soundCloud: 'https://soundcloud.com/yedgar',
    bandcamp: 'https://yedgar.bandcamp.com/',
    instagram: 'https://www.instagram.com/yedgar/',
    facebook: 'https://www.facebook.com/yedgarmusic/ ',
    twitter: 'https://twitter.com/jyedgar',
    youtube: 'https://www.youtube.com/user/YedgarMusic'
  }
};

describe('TwoSizeCard', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<TwoSizeCard
											shape='round'
											name={ testArtist.name }
											imagePath={ testArtist.imageURL }
											socialURLs={ testArtist.socialURLs }
										/>,div);
	});
});