import reqwest from "reqwest";


export function fetchImages(q=""){
  return reqwest({
    url: "api/images/"+q, type: 'json', method: 'get'
  });
}
export function removeRemoteImage(id=""){
  return reqwest({
    url: "api/images/destroy/"+id, type: 'json', method: 'DELETE'
  });
}
export function getRemoteImage(id=""){
  return reqwest({
    url: "api/images/show/"+id, type: 'json', method: 'get'
  });
}
