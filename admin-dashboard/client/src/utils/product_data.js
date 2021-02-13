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

function deleteProduct(productData){
    console.log("deleteProduct")
    return axios.post("/api/product/delete", productData)
}


const api_product = {
    addProduct,
    getProduct,
    deleteProduct
};

export default api_product;

