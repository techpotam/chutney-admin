import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { environment as ENV } from './../../environments/environment';
import { LoginModel } from './../models/loginModels/login';
import { CommanModel } from '../models/comman-model';
// import { AdminProfileModel } from '../models/loginModels/admin-profile';
// import { DashboardModel } from './../models/loginModels/dashboard';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  data: LoginModel;
  comm: CommanModel;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
        if(error.status == 377) { 
          localStorage.removeItem("Admin_Token");
          this.router.navigate(['/']);
        }
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  private extractData(res) {
    return res || {};
  }
  checkLoginFunction(val): Observable<LoginModel> {
    
    return this.http.post<LoginModel>(`${ENV.API_URL}/adminLogin`, val).pipe(map(res => {
      this.data = res;
      console.log(res)
      return this.data;
    }))
  }


  checkForgotPass(forgot): Observable<CommanModel> {
    return this.http.post<CommanModel>(`${ENV.API_URL}/forgotAdminPassword`, forgot).pipe(map(res => {
      this.comm = res;
      return this.comm;
    }))
  }

  VerifyEmail(verify): Observable<CommanModel> {

    const httpOptions = {
      headers: new HttpHeaders({
        'token': verify
      })
    };

    return this.http.post<CommanModel>(`${ENV.API_USE}/verifyEmail`, '', httpOptions).pipe(map(res => {
      this.comm = res;
      return this.comm;
    }))
  }






  resetPasswordService(pass): Observable<CommanModel> {
    return this.http.put<CommanModel>(`${ENV.API_URL}/resetAdminPassword`, pass).pipe(
      map((res => {
        this.comm = res;
        return this.comm;
      }))
    );
  }



}
