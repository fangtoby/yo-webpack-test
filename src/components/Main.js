require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  onClickEvent() {
  }
  render() {
    return (
      <div className='index'>
        <a href={'/index'}>index</a>
        |
        <a href={'/login'}>login</a>
        <img onClick={this.onClickEvent} src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
