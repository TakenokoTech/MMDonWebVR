import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import {Vector3} from '../Utils/Util.jsx';

export default class ConsoleContainer extends Component {

    get defaultState() {
        return {
            logText: ""
        }
    }

    constructor(props) {
        super(props);
        this.state = this.defaultState;
        this.addLog = this.addLog.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount to ConsoleContainer");
    }

    addLog(text) {
        console.log("addLog to ConsoleContainer");
        this.setState({ logText: ( text + "\n" + this.state.logText ) });
    }

    render() {
        console.log("render to ConsoleContainer");
        const text = {
            value: this.state.logText,
            align: 'left'
        };
        const design = {
            position: {x: 1, y: 2, z: -1},
            rotation: Vector3( 0,-30, 0)
        };
        return (
            <Entity text={text} {...design} />
        );
    }
}
