import axios from "axios";

function addCashier(cashierData){
    return axios.post("/api/cashier/add", cashierData);
};

function getCashier(merchantData){
    console.log("getCashier")
    console.log(merchantData)
    return axios.post("/api/cashier/get-all", merchantData);
};

const api_cashier = {
    addCashier,
    getCashier
};

export default api_cashier;

