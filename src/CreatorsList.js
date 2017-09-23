import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'
import Creators from './Creators.json'

import CreatorCard from './CreatorCard'

import './App.css'

class CreatorsList extends Component {
  static propTypes = {
    creators: PropTypes.array.isRequired
  }

  render() {
    const { creators, match, search } = this.props;

    const creatorCardList = Creators.creators
    .filter((creator) => {
      // const creatorSearchableInfo = creator.bio + creator.famousWorks.map(w => w.name).join()
      // + creator.obscureWorks.map(w => w.name).join() + creator.firstName + creator.lastName
      // + creator.tags.join();
      // return creatorSearchableInfo.toLowerCase().includes(search.toLowerCase());
      return creator.craft && creator.craft.includes(match.params.craft)
    }).map((creator) => {
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

function mapStateToProps(state) {
  return {
    search: state.search.search || ''
  }
}
export default connect(mapStateToProps)(CreatorsList)
