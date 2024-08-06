import axios from "axios";

const  axiosClient=axios.create({
    baseURL:"http://localhost:1337/api"
});

const getCategory=()=>axiosClient.get('/categories?populate=*')
console.log(getCategory)
const getProduct=()=>axiosClient.get('/products?populate=*').then((res)=>res.data.data) || [];
console.log(getCategory)
export default {getCategory, getProduct};