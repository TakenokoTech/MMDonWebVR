import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import {flatteningObj, Vector3} from '../Utils/Util.jsx';

export default class ObjCompornent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return ([
            <a-model key='1' src="../bowling.mtl" />,
            <a-model key='2' src="../bowling.obj" />
        ]);
    }
}
