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
          {/* <li><Link to="/RouteTest/test">动态路由</Link></li>
          <li><Link to="/RouteTest2/?id=test&id2=10">url传值</Link></li>
          <li><Link to="/Test">普通测试</Link></li>
          <li><Link to="/AxiosTest">连接测试</Link></li> */}
        </ul>
      </div>
      )
  }
}

GlobalNavTest.defaultProps={
}
