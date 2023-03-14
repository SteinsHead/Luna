import Axios from './web';

export function getBooks(datas?: any) {
  return Axios({
    url: '/api/v1/books',
    method: 'get',
    headers: {
      'Content-Type': 'application/json', //设置请求头请求格式form
    },
    data: datas ? null : datas,
  }).then(res => {
    console.log(res.data);
  });
}

export function getAbout(datas?: any) {
  return Axios({
    url: '/api/v1/about',
    method: 'get',
    headers: {
      'Content-Type': 'application/json', //设置请求头请求格式为json
    },
    data: datas ? null : datas,
  }).then(res => {
    console.log(res.data);
  });
}
