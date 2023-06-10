import { CanActivateFn } from '@angular/router';

export const routerguardGuard: CanActivateFn = (route, state) => {

  let token=localStorage.getItem('tocken');
  let tokendata;
  if(token){
    tokendata=JSON.parse(token);
  }
  if(state.url.includes('/register') || state.url.includes('/login')){
    if(tokendata==null || tokendata==undefined ||new Date(tokendata.expiration)<new Date()){
      return true
    }
    return false;
  }





  return true;
};
