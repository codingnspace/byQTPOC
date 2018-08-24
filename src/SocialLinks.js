import React, { Component } from 'react';
import PropTypes from 'prop-types';

import facebook from './facebook.svg';
import fbi from './fbi.png';
import gplus from './gplus.png';
import instagram from './instagram.png';
import imdb from './imdb.jpg';
import linkedin from './linkedin.png';
import pinterest from './pinterest.png';
import twitter from './twitter.png';
import url from "./url.png";
import wiki from "./wiki.png";
import youtube from "./youtube.png";

import './App.css';

class SocialLinks extends Component {
  static propTypes = {
    socialLinks: PropTypes.object.isRequired
  }

  render() {
    const { socialLinks } = this.props;

    const socialLinksLogos = {
      facebook,
      fbi,
      imdb,
      gplus,
      instagram,
      linkedin,
      pinterest,
      twitter,
      url,
      wiki,
      youtube
    }

    const socialLinksArr = Object.keys(socialLinks);
    const socialLinksList = socialLinksArr
      .sort()
      .filter(socialLink => socialLinks[socialLink])
      .map((socialLink) => {
        return (
          <a href={socialLinks[socialLink]}>
            <img src={socialLinksLogos[socialLink]} title={socialLink} />
          </a>
        );
      });
      
    return (
      <div className="SocialLinks">
        {socialLinksList}
      </div>
    );
  }
}

export default SocialLinks;
