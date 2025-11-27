export function decodeToken(token){
  // lightweight decode for demo (not secure)
  try{
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }catch(e){return null}
}
