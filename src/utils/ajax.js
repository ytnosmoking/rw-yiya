
import service from './service'


export const getData = (url, params) => {
  return service.request({
    url,
    params,
    method: 'get'
  })
}

export const postData = (url, data) => {
  return service.request({
    url,
    data
  })
}

export const delData = (url, data) => {
  return service.request({
    url,
    data,
    method: 'delete'
  })
}

export const putData = (url, data) => {
  return service.request({
    url,
    data,
    method: 'put'
  })
}









