/*
 * Author: Mohammed Musthafa
 * Created Date: Sunday December 11th 2022
 * Product : HighLevel Wallet
 */
import axios from 'axios';
const baseURL = 'http://localhost:8000';

const client = axios.create({
  baseURL
})

export default client;