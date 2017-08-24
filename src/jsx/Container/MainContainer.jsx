import React, {Component} from 'react'

export default class MainContainer extends Component {

    get defaultState() {
        return {
            count: 0
        }
    }

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        console.log("componentDidMount to MainContainer");
        this.setState(this.defaultState);
    }

    handleClick(e) {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                Count: {this.state.count}
                <button onClick={ e => this.handleClick(e) }>increment</button>
            </div>
        );
    }
}