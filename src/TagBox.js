import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class TagBox extends Component {
  static propTypes = {
    tagName: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className="TagBox">
        {`#${this.props.tagName.toUpperCase()}`}
      </div>
    );
  }
}

export default TagBox;
