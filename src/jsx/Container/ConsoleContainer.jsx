import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import {Vector3} from '../Utils/Util.jsx';

export default class ConsoleContainer extends Component {

    get defaultState() {
        return {}
    }

    constructor() {
        super();
        this.state = this.defaultState;
    }

    componentDidMount() {
        console.log("componentDidMount to ConsoleContainer");
    }

    render() {
        const text = {
            value: this.props.logText,
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
