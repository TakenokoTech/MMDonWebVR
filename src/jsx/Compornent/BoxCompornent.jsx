import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';

export default class BoxCompornent extends Component {

    get defaultState() {
        return {}
    }

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        console.log("BoxCompornent to SceneContainer");
        this.setState(this.defaultState);
    }

    render() {
        const Vector3 = (x, y ,z) => [x, y, z].join(' ');
        const design = {
            material: {color: 'red'},
            position: {x: 0, y: 1, z: -5},
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
            <Entity geometry={{primitive: 'box'}} {...design} {...animation} events={events} />
        );
    }
}