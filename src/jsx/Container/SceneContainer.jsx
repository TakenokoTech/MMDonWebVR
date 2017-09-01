import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import {Vector3} from '../Utils/Util.jsx';
import model from '../Model/SceneModel.jsx';

export default class SceneContainer extends Component {

    get defaultState() {
        return {
            scenePatern: 0
        }
    }

    constructor(props) {
        super(props);
        this.state = this.defaultState;
    }

    componentDidMount() {
        console.log("componentDidMount to SceneContainer");
    }

    changeScene(sceneName) {
        console.log("changeScene to SceneContainer " + this.state.scenePatern);
        this.setState({scenePatern: (this.state.scenePatern + 1) % 2 });
    }

    render() {
        console.log("render to SceneContainer", this.state);
        const planeUrl = model.scene[this.state.scenePatern]['planeUrl'];
        const skyUrl = model.scene[this.state.scenePatern]['skyUrl'];
        const lightDesign = {
            position: {x: 0, y: 5, z: 5},
            rotation: Vector3( 0,-30, 0)
        };
        const atmosphere = planeUrl ? [
            <Entity key="1" primitive="a-plane" src={planeUrl} height="100" width="100" rotation={Vector3(-90, 0, 0)} />,
            <Entity key="2" primitive="a-sky" src={skyUrl} height="2048" width="2048" radius="30" theta-length="90" />
         ] : (
            <Entity key="1" primitive="a-sky" src={skyUrl} rotation="0 -130 0" />
        );
        return (
            <Entity id="scene">
                <Entity id="light" light={{type: 'directional'}} {...lightDesign} />
                {/* <Entity id='particle' particle-system={{preset: 'snow'}}/> */}
                {atmosphere}
                <Entity id="grand" geometry={{primitive: 'box'}} static-body scale={{x: 100, y: 1, z: 100}} position={{x: 0, y: -0.5, z: 0}} material={{color: 'red', opacity: 0}} />
            </Entity>
        );
    }
}
