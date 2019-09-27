import axios from 'axios';

const KEY = 'AIzaSyAlqhu2siGO2Ar0st_csftbYQWL0NDrJzY';


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY

  }

});
