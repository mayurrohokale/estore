import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginToken, user, loggedInUser } from 'src/app/home/types/user.type';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable(
  )
export class UserServiceService {

  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private loggedInUserInfo: BehaviorSubject<loggedInUser> = new BehaviorSubject(<loggedInUser>{});

  constructor(private httpClient: HttpClient) { }
  
  get isUserAuthenticated(): boolean{
    return this.isAuthenticated.value;
  }

  get isUserAuthenticated$():Observable<boolean>{
    return this.isAuthenticated.asObservable();
  }

  get loggedInUser$():Observable<loggedInUser>{
    return this.loggedInUserInfo.asObservable();
  }


  createUser(user: user): Observable<any> {
    const url: string = 'http://localhost:5001/users/signup';
    return  this.httpClient.post(url, user);
  }
  login(email: string, password: string): Observable<any> {
    const url: string = 'http://localhost:5001/users/login';
    return this.httpClient.post(url, {email: email, password: password});
  }

  activateToken(token:loginToken):void{
      localStorage.setItem('token', token.token);
      localStorage.setItem('expiry', new Date(Date.now()+ token.expiresInSeconds * 1000).toISOString());
      localStorage.setItem('firstName', token.user.firstName);
      localStorage.setItem('lastName', token.user.lastName);
      localStorage.setItem('address', token.user.address);
      localStorage.setItem('city', token.user.city);
      localStorage.setItem('state', token.user.state);
      localStorage.setItem('pin', token.user.pin);

      this.isAuthenticated.next(true);
      this.loggedInUserInfo.next(token.user);
  }
}
