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
        return (
            <Entity id="stage">
                <Entity id={"id"} geometry={{primitive: 'box'}} dynamic-body={Constants.DYNAMIC_BODY} />
            </Entity>
        );
    }
}
