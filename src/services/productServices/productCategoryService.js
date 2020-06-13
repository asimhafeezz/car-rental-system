import { apiCall } from './apiCall'
import { setting } from '../../settings'

export default () => {

    
    const get = () => {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "GET",
            request_URI: "productcategory",
            request_BODY: ""
        }
        return apiCall(postData);
    }
    
    const getAll = () => {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "GET",
            request_URI: "productcategory/all",
            request_BODY: ""
        }
        return apiCall(postData);
    }
    
    
    const getOne = (id) => {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "GET",
            request_URI: "productcategory/" + id,
            request_BODY: ""
        }
        return apiCall(postData);
    }
    
    const add = (data) => {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "POST",
            request_URI: "productcategory",
            request_BODY: JSON.stringify(data)
        }
        return apiCall(postData);
    }
    
    const update = (data, id) => {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "PUT",
            request_URI: "productcategory/" + id,
            request_BODY: JSON.stringify(data)
    
        }
        return apiCall(postData);
    }
    
    const Delete = (id) => {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "DELETE",
            request_URI: "productcategory/" + id,
            request_BODY: ""
        }
        return apiCall(postData);
    }
    
    const search = (data) => {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "POST",
            request_URI: "productcategory/search",
            request_BODY: JSON.stringify(data)
    
        }
        return apiCall(postData);
    }
    
    const searchAll = (data) => {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "POST",
            request_URI: "productcategory/search/all",
            request_BODY: JSON.stringify(data)
        }
        return apiCall(postData);
    }
    
    const advancedSearch = (data) => {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "POST",
            request_URI: "productcategory/advancedsearch",
            request_BODY: JSON.stringify(data)
        }
        return apiCall(postData);
    }
    
    const advancedSearchAll = (data) => {
        var postData = {
            service_NAME: setting.service_NAME,
            request_TYPE: "POST",
            request_URI: "productcategory/advancedsearch/all",
            request_BODY: JSON.stringify(data)
        }
        return apiCall(postData);
    }

    return {get , getAll , add, getOne , search , searchAll , advancedSearch , advancedSearchAll , Delete , update}

}