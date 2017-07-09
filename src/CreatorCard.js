import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    socialLinks: PropTypes.object,
    photo: PropTypes.object
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

    const linkedFamousWorks = famousWorks.map((work) => {
      return (
        <a href={work.link}>{work.name} </a>
      );
    });

    const linkedObscureWorks = obscureWorks.map((work) => {
      return (
        <a href={work.link}>{work.name} </a>
      );
    });
    const tagList = tags.map((tag) => {
      return (
        <a href="#">{`#${tag}`}</a>
      );
    });
    return (
      <div className="CreatorCard">
        <h2>{`${firstName} ${lastName}`}</h2>
        <img src={photo} />
        <div className="Description">
          {`(${born} - ${death || 'Present'}) ${bio}`}
        </div>
        <blockquote>
          {quote}
        </blockquote>
        <h4>Famous Works</h4>
        {linkedFamousWorks}
        <h4>Obscure Works</h4>
        {linkedObscureWorks}
        <div>
          {tagList}
        </div>
        <h4>{`Links to More ${lastName}`}</h4>
      </div>
    );
  }
}

export default CreatorCard;
