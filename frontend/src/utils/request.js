import axios from 'axios'

//url请求时候附带
const service = axios.create({
  //前端启动时候要改为/apis
  baseURL: '', // url = base url + request url
  timeout: 30000,
  withCredentials: true // send cookies when cross-domain requests
});

// Response interceptors
service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status == 504 || error.response.status == 404) {
      Message.error({message: '服务器被吃了( ╯□╰ )'})
    } else if (error.response.status == 403) {
      Message.error({message: '权限不足，请联系管理员'})
    } else if (error.response.status == 401) {
      Message.error({message: '尚未登录，请登录'})
      router.replace('/');
    } else {
      if (error.response.data.msg) {
        Message.error({message: error.response.data.msg})
      } else {
        Message.error({message: '未知错误!'})
      }
    }
    return;
  });

let base = '';

export const postKeyValueRequest = (url, params) => {
  return service({
    method: 'post',
    url: `${base}${url}`,
    data: params,
    transformRequest: [function (data) {
      let ret = '';
      for (let i in data) {
        ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
      }
      return ret;
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}
export const postRequest = (url, params) => {
  return service({
    method: 'post',
    url: `${base}${url}`,
    data: params
  })
}
export const putRequest = (url, params) => {
  return service({
    method: 'put',
    url: `${base}${url}`,
    data: params
  })
}
export const getRequest = (url, params) => {
  return service({
    method: 'get',
    url: `${base}${url}`,
    params: params
  })
}
export const deleteRequest = (url, params) => {
  return service({
    method: 'delete',
    url: `${base}${url}`,
    params: params
  })
}

export default service
