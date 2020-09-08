import axios from 'axios'

export const apiCall = (postData) => {
    // const token = JSON.parse(localStorage.getItem("_application_name_user_detail_")).access_token
    // console.log(token)
    return axios({
        baseURL: 'https://api.cwiztech.com:8443/SGW/service',
        method: 'POST',
        headers: {
            'Authorization': `bearer 81ba5170-b38d-4905-89b3-97ef334a8cbd`
        },
        data: postData
    })
    .then(res => {
        // console.log(res.data)
        return res.data
    })
    .catch(err => console.log(err.message))

}