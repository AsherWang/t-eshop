import request from './request';


export function getProducts(params) {
  return request({
    url: '/h5/product/list',
    method: 'get',
    params,
  });
}

export default {
  getProducts,
};
