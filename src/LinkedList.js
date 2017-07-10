import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';

class LinkedList extends Component {
  static propTypes = {
    links: PropTypes.array.isRequired
  }

  render() {
    const { links } = this.props;

    const formattedLinks = links.map((linkObj) => {
      return (
        <li>
          <a href={linkObj.link}>
            {linkObj.name}
          </a>
        </li>
      );
    });

    return (
      <ul className="LinkedList">
        {formattedLinks}
      </ul>
    );
  }
}

export default LinkedList;
