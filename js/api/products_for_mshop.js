import reqwest from "reqwest";

export function fetchProducts(q=""){
  return reqwest({
    url: "api/products?q="+q, type: 'json', method: 'post'
  });
}
