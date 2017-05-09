import axios from 'axios';

const API_KEY = '1513b2322434897b7d858208aa0d046e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // returns an Action
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
