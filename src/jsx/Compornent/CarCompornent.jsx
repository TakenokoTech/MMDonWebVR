import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import BaseEntity from './BaseEntity.jsx';
import {flatteningObj, Vector3} from '../Utils/Util.jsx';

export default class CarCompornent extends BaseEntity {

    get defaultDesign() {
        return {
            position: { x: 0, y: 0, z: 0 },
            center: {x: 2.2, y: 0, z: 0},
            rotation: {x: 0, y: 180, z: 0}
        }
    }

    get rotation() {
        return this.state.rotation;
    }

    get postion() {
        const posX = this.state.position.x;
        const posY = this.state.position.y;
        const posZ = this.state.position.z;
        return {x: posX, y: posY, z: posZ};
    }

    constructor(props) {
        super(props);
        this.state = _.merge( {}, this.state, this.defaultDesign );
        this.rotate = this.rotate.bind(this);
        this.movesForward = this.movesForward.bind(this);
        this.calcCamera = this.calcCamera.bind(this);
    }

    rotate( _x = 0, _y = 0, _z = 0 ) {
        const centerX = -2.2 * Math.cos(this.state.rotation.y/180*Math.PI);
        const centerZ =  1.8 * Math.sin(this.state.rotation.y/180*Math.PI);
        this.setState({
            center: { x: centerX, y: 0, z: centerZ},
            rotation: { x: (this.state.rotation.x + _x), y:  (this.state.rotation.y + _y), z: (this.state.rotation.z + _z) }
        });
    }

    movesForward(speed) {
        const moveX = speed/10 * Math.sin(this.state.rotation.y/180*Math.PI);
        const moveY = 0;
        const moveZ = speed/10 * Math.cos(this.state.rotation.y/180*Math.PI);
        this.setState({
            position: {
                x: (this.state.position.x + moveX),
                y: (this.state.position.y + moveY),
                z: (this.state.position.z + moveZ)
            }
        });
        return {x: moveX, y: moveY, z: moveZ}
    }

    calcCamera() {
        const camX = -0.2 * -Math.cos(this.state.rotation.y/180*Math.PI);
        const camY =  2.0;
        const camZ =  3.0 * -Math.cos(this.state.rotation.y/180*Math.PI);
        return {
            x: this.state.position.x + camX,
            y: this.state.position.y + camY,
            z: this.state.position.z + camZ
        };
    }

    render() {
        const posX = this.state.position.x + this.state.center.x;
        const posY = this.state.position.y + this.state.center.y;
        const posZ = this.state.position.z + this.state.center.z;
        const rotation = Vector3(this.state.rotation.x, this.state.rotation.y, this.state.rotation.z);
        const position = Vector3(posX, posY, posZ);
        return <a-collada-model key="1" src="./images/car/model.dae" rotation={rotation}  position={position} scale="0.3 0.3 0.3" />
    }
}
