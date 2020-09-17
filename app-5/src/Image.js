import React, { Component } from 'react';

export default class Image extends Component {
    // constructor() {
    //     super();
    
    // } AFTER SOLUTION REVIEW THIS IS NOT NEEDED FOR THIS PROBLEM COMMENTED OUT FOR MY OWN LEARNING

render () {
    return (
        <div>
            <img src={this.props.url} />
        </div>
        )
    }
}