import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { Notify } from 'quasar'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: 'http://34.90.153.139/ejercicios/veterinario/' })

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

// Each petition made with Axios will do this before the request is sent.
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // config.withCredentials = true;
    // config.headers.Authorization = 'token';
    Notify.create({
        type: 'positive',
        message: 'Request done'
    })
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error && error.response && error.response.status === 401) {
        Notify.create({
            type: 'negative',
            message: 'Usuario no autorizado'
        })
    } else {
        Notify.create({
            type: 'negative',
            message: 'Unknown error'
        })
    }
    // console.log(error);
    return Promise.reject(error);
});

export { api, axios }
