import axios from 'axios';

const searchImages = async (term) => {
const response= await axios.get('https://api.unsplash.com/search/photos',{
    headers:{
      Authorization : 'Client-ID U9Upa7tVz_A9aiANIBtErh7LTHXVKysJprgxkkEPZUs'

      },
      params:{
        query:term,

      },

    });
    return response.data.results;
  };
   
  export default searchImages ;