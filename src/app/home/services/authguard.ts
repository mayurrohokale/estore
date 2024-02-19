import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { map } from 'rxjs';
import { UserServiceService } from './users/user-service.service';
export const authGuard = (next: ActivatedRouteSnapshot) => {
  return inject(UserServiceService)
    .isUserAuthenticated$
    .pipe(
      map((isAuthenticated) =>
        isAuthenticated ? true : createUrlTreeFromSnapshot(next, ['/', 'home', 'login'])
      )
    );
};
