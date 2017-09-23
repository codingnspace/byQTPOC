import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

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
        <Router>
          <div className="App">
            <SearchForm />
            <TagGrid tags= {artForms} />
            <Route path="/craft/:craft" component={CreatorsList} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
