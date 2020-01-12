import React, { Component } from 'react';

const style = {
    sketchFrame: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        minHeight: 400,
        minWidth: 600,
    },
    sketchText: {
        fontFamily: "monospace",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 0,
        color: 'aliceblue',
    },
    sketchImage: {
        //cursor: 'zoom-in',
        marginLeft: 20,
        marginRight: 20,
        maxWidth: 600,        
    }
};

class SketchFrame extends Component {
    viewImage() {
        //const viewer = ImageViewer(); //options is optional parameter
        //viewer.show(this.props.imageHD != '' ? this.props.imageHD : this.props.image); //second paramter is optional
    };

    render() {
        return (
            <div style={style.sketchFrame}>
                <div>
                    <p style={style.sketchText}>{this.props.text}</p>
                    <img style={style.sketchImage} src={this.props.image} onClick={this.viewImage.bind(this)}/>
                </div>
            </div>
        );
    }
};

export default SketchFrame;