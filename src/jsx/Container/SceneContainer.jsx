import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import {Vector3} from '../Utils/Util.jsx';

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
        console.log("render to SceneContainer");
        const lightDesign = {
            position: {x: 0, y: 5, z: 5},
            rotation: Vector3( 0,-30, 0)
        };
        const atmosphere = this.props.planeUrl ? [
            <Entity key="1" primitive="a-plane" src={this.props.planeUrl} height="100" width="100" rotation={Vector3(-90, 0, 0)} />,
            <Entity key="2" primitive="a-sky" src={this.props.skyUrl} height="2048" width="2048" radius="30" theta-length="90" />
         ] : (
            <Entity key="1" primitive="a-sky" src={this.props.skyUrl} rotation="0 -130 0" />
        );
        return (
            <Scene id="scene" physics="debug: true">
                <Entity id="light" light={{type: 'directional'}} {...lightDesign} />
                <Entity id='particle' particle-system={{preset: 'snow'}}/>
                {atmosphere}
                {this.props.children}
                <Entity id="grand" static-body geometry={{primitive: 'box'}} scale={{x: 100, y: 0.01, z: 100}} material={{color: 'blue', opacity: 0}} />
            </Scene>
        );
    }
}
