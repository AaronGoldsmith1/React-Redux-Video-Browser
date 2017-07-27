import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';



const App = () => {
  return (
    <div>
    <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'))
