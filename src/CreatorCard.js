import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LinkedList from './LinkedList';
import SocialLinks from './SocialLinks';

import './App.css';

class CreatorCard extends Component {
  static propTypes = {
    bio: PropTypes.string,
    born: PropTypes.string,
    death: PropTypes.string,
    famousWorks: PropTypes.array,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    quote: PropTypes.string,
    obscureWorks: PropTypes.array,
    photo: PropTypes.string,
    socialLinks: PropTypes.object
  }

  render() {
    const {
      bio,
      born,
      death,
      famousWorks,
      firstName,
      lastName,
      quote,
      obscureWorks,
      photo,
      socialLinks,
      tags
    } = this.props;

    const tagList = tags.map((tag) => {
      return (
        <a href="#" className="CardTag">{`#${tag}`}</a>
      );
    });

    return (
      <div className="CreatorCard">
        <h2>{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</h2>
        <img className="AuthorPhoto" src={photo} />
        <div className="Description">
          <span>
            {`${born} - ${death || 'Present'}`}
          </span>
          <blockquote>
            <p>
              {quote}
            </p>
          </blockquote>
          <p>
            {bio}
          </p>
          <div>
          {tagList}
          </div>
          <h4>Famous Works</h4>
          <LinkedList links={famousWorks} />
          <h4>Obscure Works</h4>
          <LinkedList links={obscureWorks} />
          <h4>{`More ${lastName}`}</h4>
          <SocialLinks socialLinks={socialLinks} />
        </div>
      </div>
    );
  }
}

export default CreatorCard;
