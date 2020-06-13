import axios from 'axios'

export const apiCall = (postData) => {
    // const token = JSON.parse(localStorage.getItem("_application_name_user_detail_")).access_token
    // console.log(token)
    
    
        return axios({
            baseURL: 'https://api.ulearncmis.co.uk:8443/USERLOGIN/oauth/token?grant_type=password&username=asimhyff&password=Cwiztech123',
            method: 'POST',
            headers: {
                'Authorization': `Basic VXNlck1hbmFnbWVudDpzZWNyZXQ=`
            }
        })
        .then(res => {
            console.log('infirstResponse')
            return axios({
                baseURL: 'https://api.ulearncmis.co.uk:8443/USERLOGIN/login',
                method: 'POST',
                headers: {
                    'Authorization': `bearer ${res.data.access_token}`
                },
                data: {"application_CODE": "profile"}
            })
            .then(res => {
            console.log('insecondResponse')
                
                return axios({
                    baseURL: 'https://api.ulearncmis.co.uk:8443/SGW/service',
                    method: 'POST',
                    headers: {
                        'Authorization': `bearer ${res.data.access_token}`
                    },
                    data: postData
                })
                .then(res => {
            console.log('inthirdResponse')
                    
                    // console.log(res.data)
                    return res.data
                })
                    .catch(err => console.log(err.message))
            })
            .catch(err => console.log(err.message))
        })
        .catch(err => console.log(err.message))

}