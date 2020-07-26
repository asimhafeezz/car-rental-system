import axios from 'axios'

export const apiCall = (postData) => {
    // const token = JSON.parse(localStorage.getItem("_application_name_user_detail_")).access_token
    // console.log(token)
    return axios({
        baseURL: 'https://api.cwiztech.com:8443/SGW/service',
        method: 'POST',
        headers: {
            'Authorization': `bearer f6d1fb08-ad48-471f-bdbf-abf89ba014ec`
        },
        data: postData
    })
    .then(res => {
        // console.log(res.data)
        return res.data
    })
    .catch(err => console.log(err.message))

}