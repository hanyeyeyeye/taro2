import Taro from '@tarojs/taro';

export function getJSON(url,data){
  return Taro.request({
    url,
    data,
    method:'get'
  })
}

export function postJSON(url,data){
  return Taro.request({
    url,
    data,
    method:'post'
  })
}
