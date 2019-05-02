import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID 421de60eb8384d452f0c8a2d30aa5fb2e3d17141acab3e7048b60ad955a55f84"
  }
});
