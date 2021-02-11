import axios from "axios";

function getShopping(shoppingData){
    console.log("shoppingData")
    console.log(shoppingData)
    return axios.post("/api/shopping/get-all", shoppingData)
}

const api_shopping = {
    getShopping,
};

export default api_shopping;