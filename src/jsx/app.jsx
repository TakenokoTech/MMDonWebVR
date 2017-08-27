import 'ammo-node';
import 'aframe';
import 'aframe-animation-component';
import 'aframe-physics-components';
import 'aframe-physics-system';
import 'aframe-particle-system-component';
import 'a-mmd';
import React from 'react';
import ReactDom from 'react-dom';
import MainContainer from './Container/MainContainer.jsx';

// ROOT Component
window.App = {
    render: () => ReactDom.render(<MainContainer />, document.getElementById('root'))
};
