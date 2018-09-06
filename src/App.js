import React, { Component } from 'react'
import { Provider } from 'react-redux'

import Creators from './Creators.json'

import CreatorsList from './CreatorsList'
import SearchForm from './SearchWidget'
import TagGrid from './TagGrid'

import './App.css'
import { store } from './store'

class App extends Component {
  render() {
    const artForms = ["Fiction", "Non-Fiction", "Theater", "Poetry", "Dance", "Photography", "Music",
    "Classic Arts", "Technology", "Film", "Fashion", "Culinary Arts"];
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App__info">
            <h1>by: QTPOC</h1>
            <h4>discover queer and trans creators of color</h4>
          </div>
          <SearchForm />
          <TagGrid tags={artForms} />
          <CreatorsList creators={Creators} />
        </div>
      </Provider>
    );
  }
}

export default App;
