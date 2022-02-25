import axios from 'axios';
import { REDDIT_URL } from '../constants/api';


const http = axios.create({
  // baseURL: REDDIT_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export class ReditService {
  async getPosts(subreddit: string) {
    try {
      const { data } = (await http.get(`${REDDIT_URL}/${subreddit}.json`)).data;
      return data.children.map(({ data }:any) => data);
    } catch (error) {
      console.log('GetPosts Error: ', JSON.stringify(error));
      throw error;
    }
  }
}