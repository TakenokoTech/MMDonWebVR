import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';

export default class SceneContainer extends Component {

    get defaultState() {
        return {}
    }

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        console.log("componentDidMount to SceneContainer");
        this.setState(this.defaultState);
    }

    render() {
        const Obj = this.props.planeUrl ? [
            <Entity key="1" primitive="a-plane" src={this.props.planeUrl} height="100" width="100" rotation="-90 0 0"/>,
            <Entity key="2" primitive="a-sky" src={this.props.skyUrl} height="2048" width="2048" radius="30" theta-length="90" />
         ] : (
            <Entity key="1" primitive="a-sky" src={this.props.skyUrl} rotation="0 -130 0" />
        );
        return (
            <Scene>
                <Entity light={{type: 'point'}}/>
                {Obj}
                {this.props.children}
            </Scene>
        );
    }
}