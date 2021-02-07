import axios from 'axios';

//change port

export const registerUser = userData => {
    // console.log(userData);
    return axios
    .post('/api/register', {
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        password: userData.password
    })
    .then(res => {
        console.log('Registered!');
    })
}

export const loginUser = userData => {
    // console.log(userData);
    return axios
    .post('/api/login', {
        email: userData.email,
        password: userData.password
    })
    .then(res => {
        console.log(res);
        var usertoken = res.data.token;
        var email = res.data.email;
        var first_name = res.data.first_name;
        var last_name = res.data.last_name;
        var mid = res.data.mid;
        localStorage.setItem('usertoken', usertoken);
        localStorage.setItem('email', email);
        localStorage.setItem('mid', mid);
        localStorage.setItem('first_name', first_name);
        localStorage.setItem('last_name', last_name);
        localStorage.setItem('all_user_data' , JSON.stringify(res.data))
        return res.data;
    })
    .catch(err => {
        console.log(err);
    })
}

export const getUsers = userData => {
    return axios
    .get('/api/displayusers', {
    })
    .then(response => {
        // console.log(response.data);
        // console.log(userData);  
        return response.data
    })
    .catch(err => {
        console.log(err);
    })
}