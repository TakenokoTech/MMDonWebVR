import 'aframe';
import 'aframe-animation-component';
import 'aframe-particle-system-component';
import React from 'react';
import ReactDom from 'react-dom';
import MainContainer from './Container/MainContainer.jsx';

// ROOT Component
window.App = {
    render: () => ReactDom.render(<MainContainer />, document.getElementById('root'))
};