import React, { Component } from 'react';

const style = {
    displayedContent: {
        backgroundColor: 'steelblue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 20,
        padding: 20,
    }
};

class PageContent extends Component {
    render() {
        return (
            <div style={style.displayedContent}>
                {this.props.content}
            </div>
        );
    }
};

export default PageContent;