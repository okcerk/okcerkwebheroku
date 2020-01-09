import React, { Component } from 'react';

const style = {
    youtubeFrame: {
        minWidth: 600,
    },
    description: {
        fontFamily: 'monospace',
        fontWeight: 'bold',
        margin: 10,
        width: 500,
    },
};

class YoutubeFrame extends Component {
    render() {
        return (
            <div style={style.youtubeFrame}>
                <iframe width="560" height="315" src={this.props.url} frameborder="0" allowfullscreen></iframe>
                <p style={style.description}>{this.props.description}</p>
            </div>
        );
    }
};

export default YoutubeFrame;