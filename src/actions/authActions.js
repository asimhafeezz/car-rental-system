import * as types from './types'
import { setting } from '../settings'


export const loginUser = () => {
    window.location.assign(setting.LoginAppPath + "login?application_ID=" + setting.application_ID)
}

export const onLoginComponent = userQueryStringParams => dispatch => {
    let params = userQueryStringParams
            console.log(params)
              if (params.access_token && params.application_ID && params.expires_in && params.last_LOGIN && params.user_NAME) {
                let statusdetail = saveDetail(params);
                let statusToken = saveToken(params.access_token);
                  if (statusdetail && statusToken) {
                    if(logged()){
                    console.log("Sucessfully loged in!")
                    dispatch({
                        type: types.LOGGED_IN
                    })
                    return
                      }
                    else {
                        dispatch(({
                            type:types.LOGGED_OUT
                        }))
                      }
                  }
              }
}

export const loggedOutUser = () => dispatch => {
  logout()
    dispatch({
      type:types.LOGGED_OUT
    })
}

//already logged in
export const alreadyLoggedIn = () => dispatch => {
    if (logged()) {
        dispatch({
            type: types.LOGGED_IN
        })
    }
}

export const saveToken = (token) => {
    if (token) {
      localStorage.setItem("_application_name_access_token_", token);
      return true;
    }
    else {
      return false;
    }
  }

export const saveDetail = (user)=>{
    if (user) {
      localStorage.setItem("_application_name_user_detail_", JSON.stringify(user));
      return true;
    }
    else {
      return false;
    }
  }

export const loadToken = ()=>{
    const token = localStorage.getItem("_application_name_access_token_");
    let authToken = token;
    console.log(authToken);
  }

export const loaddetail = () => {
    const getUser = localStorage.getItem("_application_name_user_detail_");
    let user = JSON.parse(getUser);
    return user;
  }

export const logout = () => {
    localStorage.removeItem("_application_name_user_detail_");
    localStorage.removeItem("_application_name_access_token_");
    // window.location.assign(setting.LoginAppPath+"logout?application_ID="+setting.application_ID);
    return true;
  }

export const logged = () => {
    const getUser = localStorage.getItem("_application_name_user_detail_");
    const _application_name_access_token_ = localStorage.getItem("_application_name_access_token_");
    if (getUser && _application_name_access_token_) {
      return true;
    } else {
      return false;
    }
}