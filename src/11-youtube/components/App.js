import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const KEY = 'AIzaSyB_Q3SUe-R-6O6kjinqobmof98GmrXVIHc';

class App extends React.Component {
  state = {videos: []};

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY,
      },
    });

    this.setState({videos: response.data.items})
  };

  render() {
    return (
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit}/>
          <div>There is {this.state.videos.length}</div>
        </div>
    );
  }
}

export default App;
