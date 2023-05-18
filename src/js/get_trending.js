import axios from 'axios';
export { getTrendingMovie }; 

const API_KEY = '5e58d3162f5aafaf855cf7d900bbc361';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day',
  params: {language: 'en-US'},
  headers: {accept: 'application/json'}
};

async function getTrendingMovie() {
    try {
      const response = await axios.get(`${options.url}?api_key=${API_KEY}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }