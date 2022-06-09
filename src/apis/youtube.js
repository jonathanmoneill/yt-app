import axios from "axios";

const KEY = 'AIzaSyCp2Lsob3Iv3qL67lL2-KZje9ey1ta7zhE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        type: 'video',
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});