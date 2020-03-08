import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const style = {
    pageLink: {
        cursor: 'pointer',
        margin: 20,
    }
};

class PageLink extends Component {
    render() {
        const image = (<img src={this.props.image} alt={this.props.title}/>);
        return (            
            <div style={style.pageLink}>
                {this.props.link && (<Link to={this.props.link}>{image}</Link>)}
                {this.props.externalUri && (<a href={this.props.externalUri} target='_blank'>{image}</a>)}
            </div>
        );
    }
};

export default PageLink;