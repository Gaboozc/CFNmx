const https = require('https');

const API_KEY = 'AIzaSyCv3SOVwLg-pyYQXYSsOR0RXUarNPyoDO8';
// Replace 'UC' with 'UU' to get the Uploads playlist ID
const UPLOADS_PLAYLIST_ID = 'UUqNFv1mDmnO0n2Opy2BI9rA';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

const url = `${BASE_URL}/playlistItems?part=snippet&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=10&key=${API_KEY}`;

console.log(`Fetching from: ${url}`);

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        try {
            const parsedData = JSON.parse(data);
            if (parsedData.error) {
                console.error('API Error:', JSON.stringify(parsedData.error, null, 2));
            } else {
                console.log('Success! Found videos:', parsedData.items ? parsedData.items.length : 0);
                if (parsedData.items) {
                    parsedData.items.forEach(item => {
                        console.log(`- ${item.snippet.title} (${item.snippet.publishedAt})`);
                    });
                }
            }
        } catch (e) {
            console.error('Error parsing JSON:', e.message);
            console.log('Raw data:', data);
        }
    });

}).on('error', (err) => {
    console.error('Network Error:', err.message);
});
