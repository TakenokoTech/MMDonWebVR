import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import SceneContainer from './SceneContainer.jsx'
import ConsoleContainer from './ConsoleContainer.jsx'
import {BoxCompornent, SphereCompornent, TextCompornent, CursorCompornent, MmdCompornent} from '../Compornent/index.jsx';
import model from '../Model/SceneModel.jsx';

export default class MainContainer extends Component {

    get defaultState() {
        return {
            scenePatern: 0,
            logText: ""
        }
    }

    constructor() {
        super();
        this.state = this.defaultState;
        this.handleClick = this.handleClick.bind(this);
        this.addLog = this.addLog.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount to MainContainer");
    }

    handleClick(e) {
        console.log("handleClick to MainContainer " + this.state.scenePatern);
        this.addLog("SCENE" + (this.state.scenePatern + 1) % 2 );
        this.setState({scenePatern: (this.state.scenePatern + 1) % 2 });
    }

    addLog(text) {
        this.setState({ logText: ( text + "\n" + this.state.logText ) });
    }

    render() {
        console.log("render to MainContainer");
        const sceneParam = {
            planeUrl: model.scene[this.state.scenePatern]['planeUrl'],
            skyUrl: model.scene[this.state.scenePatern]['skyUrl']
        };
        return (
            <SceneContainer {...sceneParam} >
                <BoxCompornent click={this.handleClick} />
                <TextCompornent />
                <MmdCompornent />
                <ConsoleContainer logText={this.state.logText} />
                <SphereCompornent />
                <CursorCompornent />
            </SceneContainer>
        );
    }
}
