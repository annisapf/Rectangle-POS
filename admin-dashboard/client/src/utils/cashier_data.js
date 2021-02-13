import axios from "axios";

function addCashier(cashierData){
    return axios.post("/api/cashier/add", cashierData);
};

function getCashier(merchantData){

    return axios.post("/api/cashier/get-all", merchantData);
};

function deleteCashier(cashierData){
    console.log("deleteCashier")
    console.log(cashierData)
    return axios.post("/api/cashier/delete", cashierData)
}

const api_cashier = {
    addCashier,
    getCashier,
    deleteCashier
};

export default api_cashier;

