import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import './App.css'
import { search } from './search';
import TagBox from './TagBox';
class TagGrid extends Component {
  static propTypes = {
    search: PropTypes.func,
    tags: PropTypes.array.isRequired
  }

  render() {
    const { search, tags } = this.props;
    const tagList = tags
      .sort()
      .map((tag) => {
        return <TagBox tagName={tag} onClick={() => search(tag)} />
      });
    return (
      <div className="TagGrid">
        {tagList}
      </div>
    );
  }
}

export default connect(null, {
  search
})(TagGrid)
