import React, { Component } from 'react';

import CreatorsList from './CreatorsList';
import SearchWidget from './SearchWidget';
import TagGrid from './TagGrid';

import Creators from './Creators.json';
import './App.css';

class App extends Component {
  render() {
    const artForms = ["Fiction", "Non-Fiction", "Theater", "Poetry", "Dance", "Photography", "Music",
    "Classic Arts", "Technology", "Film", "Fashion", "Culinary Arts"];
    return (
      <div className="App">
        <SearchWidget />
        <TagGrid tags= {artForms} />
        <CreatorsList creators={Creators.creators} />
        />
      </div>
    );
  }
}

export default App;
