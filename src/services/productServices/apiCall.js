import axios from 'axios'

export const apiCall = (postData) => {
    // const token = JSON.parse(localStorage.getItem("_application_name_user_detail_")).access_token
    // console.log(token)
    return axios({
        baseURL: 'https://api.cwiztech.com:8443/SGW/service',
        method: 'POST',
        headers: {
            'Authorization': `bearer b31db1c4-4da5-420a-9dd5-96954be1e576`
        },
        data: postData
    })
    .then(res => {
        // console.log(res.data)
        return res.data
    })
    .catch(err => console.log(err.message))

}