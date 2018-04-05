import React, { Component } from 'react';

export class HelloWorld extends Component {
  render (){
    return (
      <div className="hello-world">
        <h1>My React App With Build Tools</h1>
        <a href="https://medium.com/front-end-hacking/what-are-npm-yarn-babel-and-webpack-and-how-to-properly-use-them-d835a758f987"><p>Tutorial</p></a>
        <p>This is a small React app that I built to learn how to work with build tools. It was built with yarn, babel, and webpack. The tutorial I followed to learn these skills is linked above.</p>
      </div>
    );
  }
}

export default HelloWorld;
