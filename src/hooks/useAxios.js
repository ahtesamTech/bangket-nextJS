import axios from "axios";


const useAxios = () => {


    const axiosPublic =axios.create({
        baseURL: 'https://dummyjson.com/product',
        headers: {'X-Custom-Header': 'foobar'}
      });


    return axiosPublic
};

export default useAxios;