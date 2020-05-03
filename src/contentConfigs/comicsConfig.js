import CarsCovid from '../images/comics/cars-covid.png';
import Coronavirus from '../images/comics/coronavirus-comic.png';
import Wfh from '../images/comics/wfh.png';
import Flinstones from '../images/comics/flinstones.png';
import Spoilers from '../images/comics/spoilers.png';
import Moving from '../images/comics/moving.png';
import Coffee from '../images/comics/coffee.png';
import Traffic from '../images/comics/traffic.png';
import CrapPeopleSay from '../images/comics/crap-people-say.png';
import FriedChicken from '../images/comics/fried-chicken.png';
import Communism from '../images/comics/communism.png';

import CarsCovidHD from '../images/comics/cars-covid_hd.png';
import CoronavirusHD from '../images/comics/coronavirus-comic_hd.png';
import WfhHD from '../images/comics/wfh_hd.png';
import FlinstonesHD from '../images/comics/flinstones_hd.png';
import CoffeeHD from '../images/comics/coffee_hd.png';
import TrafficHD from '../images/comics/traffic_hd.png';
import CrapPeopleSayHD from '../images/comics/crap-people-say_hd.png';
import FriedChickenHD from '../images/comics/fried-chicken_hd.png';
import CommunismHD from '../images/comics/communism_hd.png';

export const comicsConfig = {
    key: 'comics',
    items: [
        { text: "Your car needs you!", image: CarsCovid, imageHD: CarsCovidHD, type: 'SketchFrame' },
        { text: "Stay the F home!!", image: Coronavirus, imageHD: CoronavirusHD, type: 'SketchFrame' },
        { text: "Working from hell", image: Wfh, imageHD: WfhHD, type: 'SketchFrame' },
        { text: "Dinosaurs", image: Flinstones, imageHD: FlinstonesHD, type: 'SketchFrame' },
        { text: "Deep thoughts on politics", image: Spoilers, imageHD: '', type: 'SketchFrame' },
        { text: "Got a new spot, friends", image: Moving, imageHD: '', type: 'SketchFrame' },
        { text: "Coffee!", image: Coffee, imageHD: CoffeeHD, type: 'SketchFrame' },
        { text: "Stuck in traffic", image: Traffic, imageHD: TrafficHD, type: 'SketchFrame' },
        { text: "I could've kept going", image: CrapPeopleSay, imageHD: CrapPeopleSayHD, type: 'SketchFrame' },
        { text: 'Fried chicken', image: FriedChicken, imageHD: FriedChickenHD, type: 'SketchFrame' },
        { text: 'Orange juice', image: Communism, imageHD: CommunismHD, type: 'SketchFrame' },
        { type: 'SocialMediaFrame' }
    ]
};