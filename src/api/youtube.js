import axios from 'axios';

export async function search(keyword){
  return axios
  .get(`/videos/${keyword ? 'search' : 'poplular'}.json`)
  .then(res => res.data.items);
}