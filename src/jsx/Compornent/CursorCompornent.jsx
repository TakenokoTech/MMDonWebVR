import $ from "jquery";
import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import {flatteningObj, Vector3} from '../Utils/Util.jsx';

export default class CursorCompornent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: {x: 0, y: 1.6, z: 0},
            center: {x: -0.2, y: 1.6, z: 0.8}
        };
        this.getRotation = this.getRotation.bind(this);
        this.moveCamera = this.moveCamera.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount to CursorCompornent");
    }

    componentWillReceiveProps() {
        console.log("componentWillReceiveProps to CursorCompornent");
        const el = this.refs.cam.el;
    }

    getRotation() {
        return $('#camera').attr("rotation");
    }
        
    moveCamera(x, y, z, world = false) {
        if(world) {
            this.setState({ position: { x: x, y: y, z: z }});
        } else {
            this.setState({
                position: {
                    x: this.state.position.x + (x || 0),
                    y: this.state.position.y + (y || 0),
                    z: this.state.position.z + (z || 0)
                }
            });
        }
    }

    render() {
        const cameraDesign = {
            position: {x: 0, y: 0, z: 1},
            rotation: Vector3( 0, 0, 0)
        }
        const camera = {
            active: true,
            userHeight: 3.0
        };
        const cursorDesign = {
            color: 'lightblue',
            opacity: 0.5
        }
        const cursorAnimation = {
            animation__click: {
                property: 'scale',
                startEvents: 'click',
                from: '0.1 0.1 0.1',
                to: '1 1 1',
                dur: 150
            }
        }
        const postion = Vector3(this.state.position.x, this.state.position.y, this.state.position.z);
        const str = "0 5 5";
        return (
            <Entity id='camera' ref='cam' primitive='a-camera' position={postion} look-controls >
                    <Entity id='cursor' primitive='a-cursor' {...cursorDesign} {...cursorAnimation} />
            </Entity>
        );
    }
}
