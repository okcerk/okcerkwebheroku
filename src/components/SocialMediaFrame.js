import React, { Component } from 'react';
import SocialMediaLinks from './SocialMediaLinks';
import SocialMediaTitle from '../images/socialmedia/socialmedia.png';

const style = {
    socialMediaFrame: {        
        backgroundColor: 'bisque',
        minWidth: 600,
        paddingBottom: 20,
        paddingTop: 20,
    },
    socialMediaTitle: {
        margin: 10,
    },
};

class SocialMediaFrame extends Component {
    render() {
        return (
            <div style={style.socialMediaFrame}>
                <img style={style.socialMediaTitle} src={SocialMediaTitle}/>
                <SocialMediaLinks/>
            </div>
        );
    }
};

export default SocialMediaFrame;