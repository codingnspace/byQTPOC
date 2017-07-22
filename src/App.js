import React, { Component } from 'react';
import { Provider } from 'react-redux';

import CreatorsList from './CreatorsList';
import SearchForm from './SearchWidget';
import TagGrid from './TagGrid';

import Creators from './Creators.json';
import './App.css';
import { store } from './store';

class App extends Component {
  render() {
    const artForms = ["Fiction", "Non-Fiction", "Theater", "Poetry", "Dance", "Photography", "Music",
    "Classic Arts", "Technology", "Film", "Fashion", "Culinary Arts"];
    return (
      <Provider store={store}>
        <div className="App">
          <SearchForm />
          <TagGrid tags= {artForms} />
          <CreatorsList creators={Creators.creators} />
          />
        </div>
      </Provider>
    );
  }
}

export default App;
