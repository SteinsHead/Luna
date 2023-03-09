import Axios from './web';

export function getItemList(datas: any) {
  return Axios({
    url: '/api/getItemList',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded', //设置请求头请求格式form
    },
    data: datas,
  });
}
export function getItem(datas: any) {
  return Axios({
    url: '/api/getItem',
    method: 'post',
    headers: {
      'Content-Type': 'application/json', //设置请求头请求格式为json
    },
    data: datas,
  });
}
export function getItemInfo(datas: any) {
  return Axios({
    url: '/api/getItemInfo' + datas,
    method: 'get',
  });
}
