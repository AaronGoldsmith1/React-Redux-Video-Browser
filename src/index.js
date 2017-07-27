import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.js';

//TODO: .env file
const API_KEY = 'AIzaSyDYuGLrcwYCMKfxqv1AL_0LQ46XQq5aePI'

const App = () => {
  return (
    <div>
    <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'))
