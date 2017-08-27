import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import {Vector3} from '../Utils/Util.jsx';

export default class TextCompornent extends Component {

    get defaultState() {
        return {}
    }

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        console.log("componentDidMount to TextCompornent");
        this.setState(this.defaultState);
    }

    render() {
        const id = 'text-' + (this.props.id || "");
        const text  = {
            value: 'DEMO MMDonWebVR!! \n developer tool: [ctrl+alt+I]',
            align: 'center'
        };
        const design = {
            material: {color: 'white'},
            position: {x: 0, y: 3.5, z: 0},
            rotation: Vector3(0, 0, 0)
        };
        const events = {
            click: this.props.click
        };
        return (
            <Entity id={id} text={text} {...design} events={events} />
        );
    }
}
