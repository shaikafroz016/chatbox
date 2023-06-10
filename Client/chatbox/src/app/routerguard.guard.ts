import { CanActivateFn } from '@angular/router';

export const routerguardGuard: CanActivateFn = (route, state) => {
  console.log(route,state)
  if(state.url.includes('/register')){
    let token=localStorage.getItem('tocken');

  }
  alert("Not allowed")
  return false;
};
