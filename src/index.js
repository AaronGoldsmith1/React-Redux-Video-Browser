import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import YT_API from '../api_key.js';


import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';

YTSearch({key: YT_API, term: 'surfboards'}, function(data){
  console.log(data)
})


const App = () => {
  return (
    <div>
    <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'))
