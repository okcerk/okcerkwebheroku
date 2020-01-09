import signatureImage from '../images/signature.png';
import inktoberImage from '../images/inktober.png';
import optionEscuadron37 from '../images/option-escuadron37.png';
import optionSketches from '../images/option-sketches.png';
import optionBlog from '../images/option-blog.png';
import optionAbout from '../images/option-about.png';

export const mainNavLinks = [
    { title: 'Home', image: signatureImage, link: '/' },
    { title: 'Escuadron 37', image: optionEscuadron37, link: '/escuadron37' },
    { title: 'Sketches', image: optionSketches, link: '/sketches' },
    { title: 'Blog', image: optionBlog, externalUri: 'http://www.okcerk2.blogspot.com/' },
    { title: 'About', image: optionAbout, link: '/about' }
];

export const secondaryNavLinks = [
    { title: 'Inktober 2018', image: inktoberImage, link: '/inktober' }
];