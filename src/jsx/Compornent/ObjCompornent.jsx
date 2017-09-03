import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import {flatteningObj, Vector3} from '../Utils/Util.jsx';

export default class ObjCompornent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rotation: {x: 0, y: 180, z: 0},
            position: {x: 2.2, y: 0, z: 0}
        };
        this.moveRotation = this.moveRotation.bind(this);
        this.movePosition = this.movePosition.bind(this);
    }

    moveRotation(x, y, z) {
        this.setState({
            rotation: {
                x: this.state.rotation.x + (x || 0),
                y: this.state.rotation.y + (y || 0),
                z: this.state.rotation.z + (z || 0)
            }
        });
    }

    movePosition(x, y, z) {
        this.setState({
            position: {
                x: this.state.position.x + (x || 0),
                y: this.state.position.y + (y || 0),
                z: this.state.position.z + (z || 0)
            }
        });
    }

    render() {
        const rotation = Vector3(this.state.rotation.x, this.state.rotation.y, this.state.rotation.z);
        const position = Vector3(this.state.position.x, this.state.position.y, this.state.position.z);
        return <a-collada-model key="1" src="./images/car/model.dae" rotation={rotation}  position={position} scale="0.3 0.3 0.3" />
    }
}
