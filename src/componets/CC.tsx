import React, { Component } from 'react'

interface ICCPorps{
}

interface ICCState{
}

export default class CC extends Component<ICCPorps,ICCState> {

    static defaultProps:ICCPorps;

    state={
    }

    constructor(porps:ICCPorps){
        super(porps);
    }

    render() {
        return (
        <div>
            
        </div>
        )
    }
}

CC.defaultProps={
}
