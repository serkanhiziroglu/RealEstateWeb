import axios from 'axios';
import { stringify } from 'querystring';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'e82e69f0famshed63752c4738e11p13e0f0jsn1f99c3b789b0',
        },
    });

    return data;
}