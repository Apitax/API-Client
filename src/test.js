import Apitax from 'apitax-js-client';

let apiInstance = new Apitax.ApitaxApi();

apiInstance.apiClient.basePath = "http://localhost:5085/apitax/2";

let user = new Apitax.UserAuth(); // UserAuth | The user authentication object.
user.username = 'apitax-admin';
user.password = 'test123';

let opts = {
    'user': user
};

apiInstance.authenticate(opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }
});