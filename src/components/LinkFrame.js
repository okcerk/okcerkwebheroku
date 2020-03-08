import React, { Component } from 'react';
import PageLink from './PageLink';

const style = {
    linkFrame: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        minHeight: 400,
        minWidth: 600,
    },
    linkImage: {
        //cursor: 'zoom-in',
        marginLeft: 20,
        marginRight: 20,
        maxWidth: 600,        
    }
};

class LinkFrame extends Component {
    render() {
        return (
            <div style={style.linkFrame}>
                <div style={style.linkImage}>
                    <PageLink
                        key={this.props.title}
                        title={this.props.title}
                        image={this.props.image}
                        link={this.props.link}
                        externalUri={this.props.externalUri}
                    />
                </div>
            </div>
        );
    }
};

export default LinkFrame;