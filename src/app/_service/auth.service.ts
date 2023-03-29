import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}

  isAuthenticated(): boolean {
    if (sessionStorage.getItem('token') !== null) {
      return true;
    }
    return false;
  }

  canAccess() {
    if (!this.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
  }

  register(name: string, email: string, password: string) {
    //this.http.post('');
  }

  login(email: string, password: string) {}

  canAuthenticate() {}

  detail() {
    let token = sessionStorage.getItem('token');
  }
}
