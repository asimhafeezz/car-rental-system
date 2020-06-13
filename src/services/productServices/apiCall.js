import axios from 'axios'

export const apiCall = (postData) => {
    // const token = JSON.parse(localStorage.getItem("_application_name_user_detail_")).access_token
    // console.log(token)
    return axios({
        baseURL: 'https://api.ulearncmis.co.uk:8443/SGW/service',
        method: 'POST',
        headers: {
            'Authorization': `bearer 0d7cff5d-4b99-48b6-986d-688a273b06d4`
        },
        data: postData
    })
    .then(res => {
        // console.log(res.data)
        return res.data
    })
    .catch(err => console.log(err.message))

}