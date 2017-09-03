import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import {Vector3} from '../Utils/Util.jsx';
import model from '../Model/SceneModel.jsx';

export default class AssetsContainer extends Component {

    get defaultState() {
        return {}
    }

    constructor(props) {
        super(props);
        this.state = this.defaultState;
        this.assets = {
            // "soccer-mtl": "./images/ball/soccer.mtl", 
            // "soccer-obj": "./images/ball/soccer.obj"
        }
    }

    componentDidMount() {
        console.log("componentDidMount to AssetsContainer");
    }

    render() {
        console.log("render to AssetsContainer", this.assets);
        const AssetsDom = [];
        for(let id in this.assets) {
            AssetsDom.push(
                <a-asset-item key={id} id={id} src={this.assets[id]} />
            );
        }
        return (
            <a-assets>
                {AssetsDom}
            </a-assets>
        );
    }
}
