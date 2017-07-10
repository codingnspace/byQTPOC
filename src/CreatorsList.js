import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CreatorCard from './CreatorCard';

import './App.css';

class CreatorsList extends Component {
  static propTypes = {
    creators: PropTypes.array.isRequired
  }

  render() {
    const { creators } = this.props;

    const creatorCardList = creators.map((creator) => {
      return (
        <CreatorCard
            bio={creator.bio}
            born={creator.born}
            death={creator.death}
            famousWorks={creator.famousWorks}
            firstName={creator.firstName}
            lastName={creator.lastName}
            obscureWorks={creator.obscureWorks}
            photo={creator.photo}
            quote={creator.quote}
            tags={creator.tags}
            socialLinks={creator.socialLinks}
        />
      );
    });

    return (
      <div className="CreatorsList">
        {creatorCardList}
      </div>
    );
  }
}

export default CreatorsList;
