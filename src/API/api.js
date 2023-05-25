import axios from 'axios';

const API_KEY = "05fb29f40773d2171b85f8326e288692";
const BASE_URL = 'https://api.themoviedb.org/';

class API {
    constructor() {
        this.service = axios.create({
            baseURL: BASE_URL,
            paramas: {
                api_key: API_KEY,
            }
        })
    }
}