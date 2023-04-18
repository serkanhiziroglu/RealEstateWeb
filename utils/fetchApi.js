import axios from 'axios';
import { stringify } from 'querystring';

export const baseUrl = 'wwww.bayut.p.rapidapi.com'


// headers: {
//     'X-RapidAPI-Key': 'bfa15db4d3mshc7381b5b5b86ed4p1b8fe1jsnf3fcf3f5fa20',
//         'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
// }


const options = {
    method: 'GET',
    url: 'https://bayut.p.rapidapi.com/properties/list',
    params: {
        locationExternalIDs: '5002,6020',
        purpose: 'for-rent',
        hitsPerPage: '6',
        page: '0',
        lang: 'en',
        sort: 'city-level-score',
        rentFrequency: 'monthly',
        categoryExternalID: '4'
    },
    headers: {
        'X-RapidAPI-Key': 'e82e69f0famshed63752c4738e11p13e0f0jsn1f99c3b789b0',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
};


export const fetchApi = async (purpose) => {
    options.params.purpose = purpose
    // const { data } = axios.request(options).then(function (response) {
    //     console.log('Got it')
    //     return response;
    // }).catch(function (error) {
    //     console.error(error);
    // });
    console.log('before axios');
    const { data } = await axios.request(options);
    return data;
    // return axios.request(options).then(function (response) {
    //     return response;
    // }).catch(function (error) {
    //     console.error(error);
    // })
    console.log('after axios');
}