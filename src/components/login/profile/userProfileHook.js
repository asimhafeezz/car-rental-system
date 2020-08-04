import axios from 'axios'

export default () => {
    
    let ViewProffile =  () => {
        var object = {
          application_CODE: "profile",
        };
        const savedBasictoken = JSON.parse(localStorage.getItem("_application_name_user_detail_")).basic_Token_
        console.log(object);
        console.log(savedBasictoken);
        if (object.application_CODE && savedBasictoken) {
            //api call
            axios.post('https://api.cwiztech.com:8443/USERLOGIN/login',
                { application_CODE: object.application_CODE },
                {
                    headers: {
                        Authorization: `bearer ${savedBasictoken}`
                    }
                }
            )
                .then(res => {
                    console.log('inside profle api')
                    let data = res.data
                    if (data) {
                        console.log("Console data login api");
                        console.log(data);

                        const redirect_TO_PATH = data.applicationpath_FRONTEND;
                        data.basic_Token_ = savedBasictoken;
                        delete data.applicationpath_FRONTEND;
                        var queryString = Object.keys(data)
                            .map(key => key + "=" + data[key])
                            .join("&");
                        if (redirect_TO_PATH) {
                            var url = redirect_TO_PATH + "login?" + queryString;
                            console.log(url);
                            window.open(url, '_blank');
                            window.focus();
                            return;
                        } else {
                            return;
                        }

                    }
                       else {
                        console.log("some error happen");
                      }
            })
            }
      }

    return [ViewProffile]
}