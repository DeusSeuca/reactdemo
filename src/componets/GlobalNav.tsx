import React, { Component } from 'react';
import '../assets/css/GlobalNav.css';
import {Link} from 'react-router-dom';

interface IGlobalNavTestPorps{
}

interface IGlobalNavTestState{
}

export default class GlobalNavTest extends Component<IGlobalNavTestPorps,IGlobalNavTestState> {

  static defaultProps:IGlobalNavTestPorps;

  state={
  }

  constructor(porps:IGlobalNavTestPorps){
      super(porps);
  }

  render() {
      return (
      <div className="GlobalNav">
        <ul className="GlobalList">
          <li><Link to="/">首页</Link></li>
          <li><Link to="/chat">聊天室</Link></li>
        </ul>
      </div>
      )
  }
}

GlobalNavTest.defaultProps={
}
