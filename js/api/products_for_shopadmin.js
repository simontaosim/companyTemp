import reqwest from "reqwest";


export function fetchProducts(q=""){
  return reqwest({
    url: "api/products/"+q, type: 'json', method: 'get'
  });
}
export function removeRemoteProduct(id=""){
  return reqwest({
    url: "api/products/destroy/"+id, type: 'json', method: 'DELETE'
  });
}
export function getRemoteProduct(id=""){
  return reqwest({
    url: "api/products/show/"+id, type: 'json', method: 'get'
  });
}
