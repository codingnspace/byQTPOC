import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { search } from './search';
import './App.css';

class SearchWidget extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  }

  handleSearch = (evt) => {
    evt && evt.preventDefault();

    this.props.handleSubmit((formData) => {
      this.props.search(formData.searchKeywords)
    })()
  }

  render() {
    console.log(this.props.search);
    return (
      <form className="SearchWidget" onSubmit={this.handleSearch}>
        <Field placeholder="Names, title, gender, etc"
            name="searchKeywords"
            component="input"
            type="text" />
          <button onClick={this.handleSearch}>
          Search
        </button>
      </form>
    );
  }
}

const SearchForm = reduxForm({
  form: 'Search'
})(SearchWidget)
export default connect(null, {
    search
})(SearchForm)
