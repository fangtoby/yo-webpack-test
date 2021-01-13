import React from 'react';
import './style/index.less'

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <a>login page</a>
        <div className={'login-item'}>
          <label>username:</label><input type={'text'} />
        </div>
        <div>
          <label>password:</label><input type={'text'} />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    )
  }
}
