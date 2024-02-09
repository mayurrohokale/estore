import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { user } from 'src/app/home/types/user.type';
import { Observable,  } from 'rxjs';
@Injectable(
  )
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  createUser(user: user): Observable<any> {
    const url: string = 'http://localhost:5001/users/signup';
    return  this.httpClient.post(url, user);
  }
}
