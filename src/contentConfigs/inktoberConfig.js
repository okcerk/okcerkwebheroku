import inktober2018Link from '../images/link-inktober2018.png';
import inktober2019Link from '../images/link-inktober2019.png';

const message = "Inktober is a month long art challenge created by artist Jake Parker that is focused on improving skill and developing positive drawing habits. Every day for the month of October anyone participating in the Inktober challenge creates an ink drawing and posts it online. For more information visit https://inktober.com/faq";

export const inktoberConfig = {
    key: 'inktober',
    items: [        
        { title: 'Inktober 2018', image: inktober2018Link, link: '/inktober2018', type: 'LinkFrame' },
        { title: 'Inktober 2019', image: inktober2019Link, link: '/inktober2019', type: 'LinkFrame' },
        { header: 'What is Inktober?', text: message, type: 'TextFrame' },
        { type: 'SocialMediaFrame' },
    ]
};

