const https = require('https');

const urls = [
    'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg',
    'https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png',
    'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80',
    'https://dummyimage.com/100x100/eeeeee/000000&text=Test'
];

urls.forEach(url => {
    https.get(url, (res) => {
        console.log(`${url}: ${res.statusCode}`);
    }).on('error', (e) => {
        console.error(`${url}: Error ${e.message}`);
    });
});
