import axios from "axios";

function getTransaction(transactionData){
    console.log("getTransaction")
    console.log(transactionData)
    return axios.post("/api/transaction/get-all", transactionData);
};


const api_transaction = {
    getTransaction
};

export default api_transaction;

