import axios from 'axios'

export const apiCall = (postData) => {
    // const token = JSON.parse(localStorage.getItem("_application_name_user_detail_")).access_token
    // console.log(token)
    return axios({
        baseURL: 'https://api.cwiztech.com:8443/SGW/service',
        method: 'POST',
        headers: {
            'Authorization': `bearer b09d4cf1-ff60-4066-a152-b2eff53e294e`
        },
        data: postData
    })
    .then(res => {
        // console.log(res.data)
        return res.data
    })
    .catch(err => console.log(err.message))

}