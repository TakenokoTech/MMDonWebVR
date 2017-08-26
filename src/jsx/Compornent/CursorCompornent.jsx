import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';

export default class CursorCompornent extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        const Vector3 = (x, y ,z) => [x, y, z].join(' ');
        const design = {
            color: 'lightblue',
            opacity: 0.5
        }
        const animation = {
            animation__click: {
                property: 'scale',
                startEvents: 'click',
                from: '0.1 0.1 0.1',
                to: '1 1 1',
                dur: 150
            }
        }
        return (
            <Entity primitive="a-camera">
                    <Entity primitive="a-cursor" {...design} {...animation} />
            </Entity>
        );
    }
}