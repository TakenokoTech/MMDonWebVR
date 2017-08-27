import React, {Component} from 'react'
import {Entity, Scene} from 'aframe-react';
import {flatteningObj, Vector3} from '../Utils/Util.jsx';

export default class MmdCompornent extends Component {

    constructor() {
        super();
    }

    render() {
        const mmdId = 'mmd-' + (this.props.id || "");
        const modelId = 'mmd-model-' + (this.props.id || "");
        const design = {
            scale: {x:0.1, y:0.1, z:0.1},
            position: {x: -2, y: 0, z: -2},
            rotation: Vector3( 0, 30, 0)
        };
        const soundSource = {
            audio: "https://cdn.rawgit.com/mrdoob/three.js/dev/examples/models/mmd/audios/wavefile_short.mp3",
            autoplay: true,
            volume: 0.1,
            audioDelayTime: 5.333333333333333,
            afterglow: 2.0
        };
        const model = {
            model: "./images/kizunaai/kizunaai.pmx",
            vpd: "",
            vmd: "https://cdn.rawgit.com/mrdoob/three.js/dev/examples/models/mmd/vmds/wavefile_v2.vmd",
            physics: false,
            blink: false
        };
        return (
            <Entity id={mmdId} {...design} mmd={flatteningObj(soundSource)} >
                <Entity id={modelId} mmd-model={flatteningObj(model)} />
            </Entity>
        );
    }
}
