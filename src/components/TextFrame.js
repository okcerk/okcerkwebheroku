import React, { Component } from 'react';

const style = {
    textFrame: {
        maxWidth: 750,
        minWidth: 600,        
    },
    text: {
        color: 'aliceblue',
        fontFamily: 'monospace',
        fontSize: 20,
    },
};

class TextFrame extends Component {
    render() {
        return (
            <div style={style.textFrame}>
                <h2 style={style.text}>{this.props.header}</h2>
                <p style={style.text}>{this.props.text}</p>
            </div>
        );
    }
};

export default TextFrame;