import React, { Component } from 'react';

import CreatorCard from './CreatorCard';
import SearchWidget from './SearchWidget';
import TagGrid from './TagGrid';
import './App.css';

class App extends Component {
  render() {
    const artForms = ["Fiction", "Non-Fiction", "Theater", "Poetry", "Dance", "Photography", "Music",
    "Classic Arts", "Technology", "Film", "Fashion", "Culinary Arts"];
    return (
      <div className="App">
        <SearchWidget />
        <TagGrid tags= {artForms} />
        <CreatorCard firstName = "James"
          lastName = "Baldwin"
          born = "February 9th, 1945"
          death = "April 2nd, 1987"
          bio = "Baldwin was a force to be reckoned with. He was the best at what he did. He is the reason
              that the civil rights movement was so extraordinary. He was the besties with MLK, Malcom X
              and megar ever. There is a movie that features him released in 2014. Many don't know he was
              also a childrens book writer"
          quote = "Nothing that isn't faced can be changed and nothing can be changed until faced"
          famousWorks = {[
            {
                link: "https://www.amazon.com/Giovannis-Room-James-Baldwin/dp/0345806565/ref=sr_1_8?s=books&ie=UTF8&qid=1499628458&sr=1-8&keywords=james+baldwin",
                name: "Giovanni's Room"
            }, {
                link: "https://www.amazon.com/Fire-Next-Time-James-Baldwin/dp/067974472X/ref=sr_1_1?s=books&ie=UTF8&qid=1499628458&sr=1-1&keywords=james+baldwin",
                name: "The Fire Next Time"
            }, {
                link: "https://www.amazon.com/Go-Tell-Mountain-Vintage-International/dp/0345806549/ref=sr_1_6?s=books&ie=UTF8&qid=1499628458&sr=1-6&keywords=james+baldwin",
                name: "Go Tell it on the Mountain"
            }
          ]}
          obscureWorks = {[
            {
                link: "https://www.amazon.com/Giovannis-Room-James-Baldwin/dp/0345806565/ref=sr_1_8?s=books&ie=UTF8&qid=1499628458&sr=1-8&keywords=james+baldwin",
                name: "Giovanni's Room"
            }, {
                link: "https://www.amazon.com/Fire-Next-Time-James-Baldwin/dp/067974472X/ref=sr_1_1?s=books&ie=UTF8&qid=1499628458&sr=1-1&keywords=james+baldwin",
                name: "The Fire Next Time"
            }, {
                link: "https://www.amazon.com/Go-Tell-Mountain-Vintage-International/dp/0345806549/ref=sr_1_6?s=books&ie=UTF8&qid=1499628458&sr=1-6&keywords=james+baldwin",
                name: "Go Tell it on the Mountain"
            }
          ]}
        tags = {['fiction', 'black', 'african american', 'gay', 'male', 'cis', 'childrens books',
          'non-fiction', 'civil rights movement']}
        socialLinks = {{
          wiki: 'https://en.wikipedia.org/wiki/James_Baldwin',
          fbi: 'https://vault.fbi.gov/james-baldwin'
        }}
        photo = 'https://cdn-images-1.medium.com/max/1600/1*fbPgxiMGfhR3AxkL3LEuIg.jpeg'
        />
      </div>
    );
  }
}

export default App;
