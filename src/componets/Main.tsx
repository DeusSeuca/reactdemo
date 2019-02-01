import React, { Component } from 'react';
import '../assets/css/Main.css';
import {Link} from 'react-router-dom';
import {Button} from 'antd';

export default class Main extends Component<IMainPorps,IMainState> {

  static defaultProps:IMainPorps;

  state={
  }

  constructor(porps:IMainPorps){
    super(porps);
  }

  render() {
    return (
      <div className="App">
        <p>什么都没有的主页</p>
      </div>
    );
  }
}

interface IMainPorps{
}

interface IMainState{
}

Main.defaultProps={
}
