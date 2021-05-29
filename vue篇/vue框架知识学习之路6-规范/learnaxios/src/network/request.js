import axios from 'axios'

//config表示配置信息
    export function request(config) {
      return new Promise((resolve, reject) => {
        //1.创建实例
        const instance = axios.create({
          baseURL: 'http://123.207.32.32:8000',
          timeout: 3000
        })

        //2.axios拦截器
        //请求拦截
        instance.interceptors.request.use(config => {
             console.log(config);
            //拦截之后需要将config返回，不然拿不到这个config,然后err就会报错
            return config;
          }, err => {
             console.log(err);
          });

           //响应拦截
          instance.interceptors.response.use(res => {
            console.log(res.data);
            //也需要返回，但是只需要data即可
            // return res.data
          }, err => {
            console.log(err);
          })
        instance.interceptors.response;

        //3.发送真正的网络请求
        return instance(config)
      })
    }

