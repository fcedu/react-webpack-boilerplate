import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import HelloWorld from './components/hello-world';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <HelloWorld
                title="知识改变命运，丰橙成就未来！"
                subTitle="Knowledge changes your life，FengCheng makes your future!"
            />
        );
    }
}

export default hot(App);
