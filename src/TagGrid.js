import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import TagBox from './TagBox';
class TagGrid extends Component {
  static propTypes = {
    tags: PropTypes.array.isRequired
  }

  render() {
    const { tags } = this.props;
    const tagList = tags
      .sort()
      .map((tag) => {
        return <TagBox tagName={tag} />
      });
    return (
      <div className="TagGrid">
        {tagList}
      </div>
    );
  }
}

export default TagGrid;
