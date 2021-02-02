import axios from "axios";

export function addCashier(cashierData){
    return axios.get("/api/cashier/add", cashierData);
};

function getCashier(){
    return axios.get("/api/cashier/get-all");
};

const api_cashier = {
    addCashier,
    getCashier
};

export default api_cashier;

