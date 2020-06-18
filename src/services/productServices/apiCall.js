import axios from 'axios'

export const apiCall = (postData) => {
    // const token = JSON.parse(localStorage.getItem("_application_name_user_detail_")).access_token
    // console.log(token)
    return axios({
        baseURL: 'https://api.ulearncmis.co.uk:8443/SGW/service',
        method: 'POST',
        headers: {
            'Authorization': `bearer 9caed28b-e75f-41b7-9fd9-c14dbf147cf4`
        },
        data: postData
    })
    .then(res => {
        // console.log(res.data)
        return res.data
    })
    .catch(err => console.log(err.message))

}