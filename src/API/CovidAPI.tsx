import axios from 'axios'


    export const covidAPI = axios.create({
        baseURL: 'https://covid-api.mmediagroup.fr/v1'
    });

