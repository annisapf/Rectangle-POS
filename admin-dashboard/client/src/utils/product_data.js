import axios from "axios";

function addProduct(productData){
    console.log("addProduct")
    console.log(productData)
    return axios.post("/api/product/add", productData,  {
    headers: {
        'Content-Type': 'multipart/form-data'
      }}
    );
};

function getProduct(merchantData){
    console.log("getProduct")
    console.log(merchantData)
    return axios.get("/api/product/get-all", merchantData);
};


const api_product = {
    addProduct,
    getProduct
};

export default api_product;

