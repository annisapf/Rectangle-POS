import axios from 'axios';


export const loginUser = userData => {
    // console.log(userData);
    return axios
    .post('/api/login', {
        username: userData.username,
        password: userData.password
    })
    .then(res => {
        console.log(res.data);
        var username = res.data.username;
        var mid = res.data.mid;
        localStorage.setItem('mid', mid);
        localStorage.setItem('username', username);
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