import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import SceneContainer from './SceneContainer.jsx'
import ConsoleContainer from './ConsoleContainer.jsx'
import {BoxCompornent, SphereCompornent, TextCompornent, CursorCompornent, MmdCompornent} from '../Compornent/index.jsx';

export default class MainContainer extends Component {

    get defaultState() {
        return {}
    }

    constructor(props) {
        super();
        this.state = this.defaultState;
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount to MainContainer");
    }

    handleClick(e) {
        console.log("handleClick to MainContainer");
        this.refs.consoleContainer.addLog("SCENE CHANGE");
        this.refs.sceneContainer.changeScene(e);
    }

    render() {
        console.log("render to MainContainer");
        return (
            <Scene id="scene" physics="debug: true">
                <SceneContainer ref="sceneContainer" />
                <BoxCompornent click={this.handleClick} />
                <TextCompornent />
                <MmdCompornent />
                <ConsoleContainer ref="consoleContainer" logText={this.state.logText} />
                <SphereCompornent />
                <CursorCompornent />
            </Scene>
        );
    }
}
