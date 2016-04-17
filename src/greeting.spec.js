// import '../testHelpers/emulateDom';
import UnexpectedReact from 'unexpected-react';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TestUtils from 'react-addons-test-utils';

import Unexpected from 'unexpected';

const expect = Unexpected
    .clone()
    .use(UnexpectedReact);

const CoolComponent = React.createClass({

    getInitialState() {
        return {
            clickCount: 0
        };
    },

    handleClick() {
       this.setState({
           clickCount: this.state.clickCount + 1
       })
    },

    render() {
        return <div>
            <h1 id="main-header" className="header custom-4312">Greeting</h1>
            <div id="greeting-text" className="greeting large blinking" onClick={this.handleClick}>hello world!</div>
        </div>;
    }
});

const WrapperComponent = React.createClass({
    render() {
        return <CoolComponent someObject={this.props.someObject} />;
    }
});


describe('CoolComponent', () => {

    it('should compare props using to satisfy', () => {

        const renderer = TestUtils.createRenderer();

        renderer.render(<WrapperComponent someObject={{ id: 's13X-7', value: 2, label: 'three' }} />);
        expect(renderer, 'to have rendered', <CoolComponent someObject={{ label: 'two', value: 2 }}/>);
    });

});
