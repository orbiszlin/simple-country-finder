import {HttpInterceptorFn} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {inject} from "@angular/core";
import {Router} from "@angular/router";

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router)

  return next(req).pipe(
    catchError(error => {
      if (error.status === 404) {
        router.navigate(['/tabs/tab1']);
      }

      return throwError(() => error);
    })
  );
};
