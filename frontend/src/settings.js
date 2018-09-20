import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout/DefaultLayout';

var ExampleClassB = React.createClass({
    render: function() {
        return (
            <span>{this.props.a? "true" : "false"}</span>
        );
    }
});
