import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './App.css'

class TagBox extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    tagName: PropTypes.string.isRequired
  }

  render() {
    const { onClick, tagName } = this.props;
    return (
      <div className="TagBox" onClick={onClick}>
        {`#${tagName.toUpperCase()}`}
      </div>
    );
  }
}

export default TagBox;
