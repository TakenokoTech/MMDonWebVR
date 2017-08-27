import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import {flatteningObj, Vector3} from '../Utils/Util.jsx';

export default class SphereCompornent extends Component {

    get defaultState() {
        return {}
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log("componentDidMount to SphereCompornent");
        this.setState(this.defaultState);
    }

    render() {
        const id = 'sphere-' + (this.props.id || "");
        const design = {
            material: {color: 'blue'},
            position: {x: 0, y: 10, z: -2},
            rotation: Vector3(-45,-45,-45),
            scale: {x: 0.1, y: 0.1, z: 0.1}
        }
        const animation = {
            // animation__rotate: {property: 'rotation', dur: 5000, loop: true, to: '315 315 315'},
            // animation__scale: {property: 'scale', dir: 'alternate', dur: 1000, loop: true, to: '1.1 1.1 1.1'}
        }
        const events = {
            click: this.props.click
        };
        const dynamic = {
            mass:100,
            linearDamping: 0.01,
            angularDamping: 0.0001
        };
        return (
            <Entity id={id} geometry={{primitive: 'sphere'}} {...design} {...animation} events={events} dynamic-body={flatteningObj(dynamic)} />
        );
    }
}
