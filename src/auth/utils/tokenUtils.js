export function saveToken(token){
  localStorage.setItem('sf_token', token);
}
export function getToken(){
  return localStorage.getItem('sf_token');
}
export function removeToken(){
  localStorage.removeItem('sf_token');
}
