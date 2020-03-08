import Flinstones from '../images/comics/flinstones.png';
import Spoilers from '../images/comics/spoilers.png';
import Moving from '../images/comics/moving.png';
import Coffee from '../images/comics/coffee.png';
import Traffic from '../images/comics/traffic.png';
import CrapPeopleSay from '../images/comics/crap-people-say.png';
import FriedChicken from '../images/comics/fried-chicken.png';
import Communism from '../images/comics/communism.png';

export const comicsConfig = {
    key: 'comics',
    items: [
        { text: "Dinosaurs", image: Flinstones, imageHD: Flinstones, type: 'SketchFrame' },
        { text: "Deep thoughts on politics", image: Spoilers, imageHD: '', type: 'SketchFrame' },
        { text: "Got a new spot, friends", image: Moving, imageHD: '', type: 'SketchFrame' },
        { text: "Coffee!", image: Coffee, imageHD: '', type: 'SketchFrame' },
        { text: "Stuck in traffic", image: Traffic, imageHD: '', type: 'SketchFrame' },
        { text: "I could've kept going", image: CrapPeopleSay, imageHD: '', type: 'SketchFrame' },
        { text: 'Fried chicken', image: FriedChicken, imageHD: '', type: 'SketchFrame' },
        { text: 'Orange juice', image: Communism, imageHD: '', type: 'SketchFrame' },
        { type: 'SocialMediaFrame' }
    ]
};