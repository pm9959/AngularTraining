import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  get MemberAuth()
  {
  //Login for Member Auth
  return true;
 }
}
