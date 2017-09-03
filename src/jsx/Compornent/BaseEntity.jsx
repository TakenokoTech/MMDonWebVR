import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import _ from 'lodash';

export default class BaseEntity extends Component {

    get defaultDesign() {
        return {
            material: {color: 'white'},
            position: { x: 0, y: 0, z: 0 },
            rotation: { x: 0, y: 0, z: 0 },
            scale: { x: 0, y: 0, z: 0 }
        }
    }

    constructor(props) {
        super(props);
        this.state = _.merge( {}, this.state, this.defaultDesign );
        this.translate = this.translate.bind(this);
        this.rotate = this.rotate.bind(this);
    }

    position( _x = 0, _y = 0, _z = 0 ) {
        this.setState({position: { x: _x, y: _y, z: _z }});
    }
    rotation( _x = 0, _y = 0, _z = 0 ) {
        this.setState({rotation: { x: _x, y: _y, z: _z }});
    }
    scale( _x = 0, _y = 0, _z = 0 ) {
        this.setState({scale: { x: _x, y: _y, z: _z }});
    }
    color( _color = 'white' ) {
        this.setState({material: { color: _color }});
    }
    translate(_x = 0, _y = 0, _z = 0, world = false) {
        world 
            ? this.setState({position: { x: _x, y: _y, z: _z }} )
            : this.setState({position: { x: (this.state.position.x + _x), y:  (this.state.position.y + _y), z: (this.state.position.z + _z) }});
    }
    rotate(_x = 0, _y = 0, _z = 0, world = false) {
        world 
        ? this.setState({rotation: { x: _x, y: _y, z: _z }} )
        : this.setState({rotation: { x: (this.state.rotation.x + _x), y:  (this.state.rotation.y + _y), z: (this.state.rotation.z + _z) }});
    }
    render() {
        const pos = {x: this.state.position.x, y: this.state.position.y, z: this.state.position.z};
        const rot = {x: this.state.rotation.x, y: this.state.rotation.y, z: this.state.rotation.z};
        return <Entity id={"mock"} geometry={{primitive: 'box'}} material={{color: 'white'}} position={pos} rotation={rot} />;
    }
}