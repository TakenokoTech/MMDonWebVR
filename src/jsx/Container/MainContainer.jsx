import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import AssetsContainer from './AssetsContainer.jsx'
import SceneContainer from './SceneContainer.jsx'
import ConsoleContainer from './ConsoleContainer.jsx'
import StageContainer from './StageContainer.jsx'
import {BoxCompornent, CarCompornent, SphereCompornent, TextCompornent, CursorCompornent, MmdCompornent, ObjCompornent, BaseEntity} from '../Compornent/index.jsx';

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
            console.log(rot)
            const a = 180 + rot.y - this.refs.carCompornent.rotation.y;
            const speed = rot.x / 3;
            this.refs.carCompornent.rotate( 0, a/10, 0);
            this.refs.carCompornent.movesForward(speed);
            const cam = this.refs.carCompornent.calcCamera();
            this.refs.cursorCompornent.moveCamera( cam.x, cam.y, cam.z, true)            
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
                <CarCompornent ref="carCompornent" />
                {/* <ObjCompornent ref="ObjCompornent" /> */}
                {/* <StageContainer /> */}
                <BaseEntity ref="baseEntity" />
            </Scene>
        );
    }
}
