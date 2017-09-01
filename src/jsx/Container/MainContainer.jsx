import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import AssetsContainer from './AssetsContainer.jsx'
import SceneContainer from './SceneContainer.jsx'
import ConsoleContainer from './ConsoleContainer.jsx'
import StageContainer from './StageContainer.jsx'
import {BoxCompornent, SphereCompornent, TextCompornent, CursorCompornent, MmdCompornent, ObjCompornent} from '../Compornent/index.jsx';

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
        let i = 0;
        setInterval(() => {
            const rot = this.refs.cursorCompornent.getRotation();
            const rad = 1 - Math.cos(rot.y * (Math.PI / 180));
            if( i++ % 1000 ) console.log();
            this.refs.cursorCompornent.moveCamera( -rad*0.01, 0, -0.01)
            //this.refs.ObjCompornent.moveRotation( 0, -rot.x/10, 0 )
            this.refs.ObjCompornent.movePosition( -rad*0.01, 0, -0.01)
        }, 100);
    }

    handleClick(e) {
        console.log("handleClick to MainContainer");
        this.refs.consoleContainer.addLog("SCENE CHANGE");
        this.refs.sceneContainer.changeScene(e);
    }

    render() {
        console.log("render to MainContainer");
        return (
            <Scene id="scene" physics="debug: true" stats>
                <AssetsContainer />
                <SceneContainer ref="sceneContainer" />
                <BoxCompornent click={this.handleClick} />
                <SphereCompornent />
                <TextCompornent />
                <MmdCompornent />
                <ConsoleContainer ref="consoleContainer" logText={this.state.logText} />
                <CursorCompornent ref="cursorCompornent" position={this.state.position} />
                <ObjCompornent ref="ObjCompornent" />
                {/* <StageContainer /> */}
            </Scene>
        );
    }
}
