import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const patientGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  var r = localStorage.getItem('role');
  if(r === 'USER'){
    return true;
  }
  else{
    router.navigateByUrl('')
    return false;
  }
  
}


