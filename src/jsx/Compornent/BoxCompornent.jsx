import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import {Vector3} from '../Utils/Util.jsx';

export default class BoxCompornent extends Component {

    get defaultState() {
        return {}
    }

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        console.log("componentDidMount to BoxCompornent");
        this.setState(this.defaultState);
    }

    render() {
        const id = 'box-' + (this.props.id || "");
        const design = {
            material: {color: 'red'},
            position: {x: 0, y: 1.6, z: -5},
            rotation: Vector3(-45,-45,-45)
        }
        const animation = {
            animation__rotate: {property: 'rotation', dur: 5000, loop: true, to: '315 315 315'},
            animation__scale: {property: 'scale', dir: 'alternate', dur: 1000, loop: true, to: '1.1 1.1 1.1'}
        }
        const events = {
            click: this.props.click
        };
        return (
            <Entity id={id} geometry={{primitive: 'box'}} {...design} {...animation} events={events} />
        );
    }
}
