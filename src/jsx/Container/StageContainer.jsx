import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import {flatteningObj, Vector3} from '../Utils/Util.jsx';
import Constants from '../Model/Constants';
import model from '../Model/SceneModel.jsx';

export default class StageContainer extends Component {

    get defaultState() {
        return {
            scenePatern: 0
        }
    }

    constructor(props) {
        super(props);
        this.state = this.defaultState;
    }

    componentDidMount() {
        console.log("componentDidMount to StageContainer");
    }

    render() {
        console.log("render to StageContainer", this.state);
        const LEN = 2;
        let Blocks = [];

        for(let x = 0; x <= LEN; x++) {
            for(let y = 0; y <= LEN; y++) {
                for(let z = 0; z <= LEN; z++) {
                    const id = 'box-' + x + "" + y + "" + z;
                    const design = {
                        material: {color: ( x%2==1 ^ y%2==1 ^ z%2==1 ) ? 'red' : 'blue'},
                        position: {x: 1*x - LEN/2, y: 5 + 1+y - LEN/2, z: 1*z - LEN/2},
                        rotation: Vector3( 0, 0, 0),
                        scale: {x:0.9, y:0.9, z:0.9}
                    }
                    const animation = {
                        // animation__rotate: {property: 'rotation', dur: 5000, loop: true, to: '315 315 315'},
                        // animation__scale: {property: 'scale', dir: 'alternate', dur: 1000, loop: true, to: '1.1 1.1 1.1'}
                    }
                    const events = {
                        click: this.props.click
                    };
                    Blocks.push(<Entity key={id} id={id} geometry={{primitive: 'box'}} {...design} {...animation} events={events} dynamic-body={Constants.DYNAMIC_BODY} />);
                }
            }
        }
        return (
            <Entity id="stage">
                {Blocks}
            </Entity>
        );
    }
}
