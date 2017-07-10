import React, { Component } from 'react';

import './App.css';

class SearchWidget extends Component {
  render() {
    return (
      <div className="SearchWidget">
        <input placeholder="Names, title, gender, etc" />
        <button>
          Search
        </button>
        <button className="AdvancedBtn">
          Advanced
        </button>
      </div>
    );
  }
}

export default SearchWidget;
