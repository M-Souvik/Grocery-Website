import axios from "axios";

const  axiosClient=axios.create({
    baseURL:"http://localhost:1337/api"
});

const getCategory=()=>axiosClient.get('/categories?populate=*')
console.log(getCategory)
const getProduct=()=>axiosClient.get('/products?populate=*').then((res)=>res.data.data) || [];
console.log(getCategory)
const getFilteredCategory=(category)=>axiosClient.get(`/products?populate=*&filters[categories][title][$in]=${category}`);
console.log(getFilteredCategory)

//User Registration Logic
const RegisterUser = ( username, email, password ) => axiosClient.post('/auth/local/register', {
    username,
    email,
    password
});
//  User Signing in Logic
const signIn=(username,password)=>axiosClient.post('/auth/local',{
    identifier: username,
    password: password
})
const AddToCart=(data, jwt)=>axiosClient.post('/user-carts', data,{
    headers:{
        Authorization:'Bearer '+jwt
    }
})

const getCartItems=(userId, jwt)=>axiosClient.get(`/user-carts?filters[userId][$eq]=${userId}&[populate][products][populate][Image][populate][0]=url`,{
    headers:{
        Authorization:'Bearer '+jwt
    }
}).then((response)=>{
    const data = response.data.data;
    const cartItemsList=data.map((item,index)=>({
    name: item.attributes.products?.data[0]?.attributes.name,
    quantity: item.attributes.products?.quantity,
    amount: item.attributes.amount,
    image: item.attributes.products?.data[0]?.attributes.Image?.data[0]?.attributes.url,
    actualPrice: item.attributes.products?.data[0]?.attributes.Price,
    id: item.id
    }))
    return response.data.data;
});
console.log(getCartItems)


export default {getCategory, getProduct, getFilteredCategory, RegisterUser, signIn, AddToCart,getCartItems};