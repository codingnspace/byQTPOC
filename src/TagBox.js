import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './App.css'

class TagBox extends Component {
  static propTypes = {
    tagName: PropTypes.string.isRequired
  }

  render() {
    const { tagName } = this.props;
    return (
      <Link className="TagBox" to={`/craft/${tagName}`}>
        {`#${tagName.toUpperCase()}`}
      </Link>
    );
  }
}

export default TagBox;
