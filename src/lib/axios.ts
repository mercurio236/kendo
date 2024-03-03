import axios from 'axios'
const {VITE_APP_KEY} = import.meta.env

export const api = axios.create({
    baseURL: `https://api.giphy.com/v1/gifs/trending?api_key=${VITE_APP_KEY}`
})