import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import SceneContainer from './SceneContainer.jsx'
import {BoxCompornent, CursorCompornent} from '../Compornent/index.jsx';
import model from '../Model/SceneModel.jsx';

export default class MainContainer extends Component {

    get defaultState() {
        return { scenePatern: 0 }
    }

    constructor() {
        super();
        this.state = this.defaultState;
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount to MainContainer");
    }

    handleClick(e) {
        console.log("handleClick to MainContainer " + this.state.scenePatern);
        this.setState({scenePatern: (this.state.scenePatern + 1) % 2 });
    }

    render() {
        const sceneParam = {
            planeUrl: model.scene[this.state.scenePatern]['planeUrl'],
            skyUrl: model.scene[this.state.scenePatern]['skyUrl']
        };
        return (
            <SceneContainer {...sceneParam} >
                <BoxCompornent click={this.handleClick} />
                <Entity particle-system={{preset: 'snow'}}/>
                <Entity text={{value: 'DEMO MMDonWebVR!! \n developer tool: [ctrl+alt+I]', align: 'center'}} position={{x: 0, y: 2, z: -1}}/>
                <CursorCompornent />
            </SceneContainer>
        );
    }
}
