import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const testerGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  var r = localStorage.getItem('role');
  if(r === 'Tester'){
    return true;
  }
  else{
    router.navigateByUrl('')
    return false;
  }
  
}
