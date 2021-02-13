import axios from "axios";

function addTransaction(transactionData){
    console.log("---------------------------------------")
    console.log(transactionData)
    return axios.post("/api/transaction/add", transactionData);
};

const api_transaction = {
    addTransaction
};

export default api_transaction;

