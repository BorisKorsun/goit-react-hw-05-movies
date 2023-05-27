import axios from 'axios';

const API_KEY = "05fb29f40773d2171b85f8326e288692";
const BASE_URL = 'https://api.themoviedb.org/';

class API {
    constructor() {
        this.service = axios.create({
            baseURL: BASE_URL,
            params: {
                api_key: API_KEY,
                query: null,
            }
        })
    };

    async getTrendingMoviesPerDay() {
        return await this.service.get('3/trending/movie/day');
    };

    async searchMovies(q) {
        this.params.query = q;
        return await this.service.get('3/search/movie')
    };

    resetParams() {
        this.params.api_key = API_KEY;
        this.params.query = null;
    };

    get params() {
        return this.service.defaults.params
    };

    set params(value) {
        this.service.defaults.params = value
    };
};

export default API;