import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

interface User {
  email: string;
  password: string;
  username?: string;
  phonenumber?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private users: User[] = [
    {
      username: 'Tom',
      email: 'tom8@gmail.com',
      phonenumber: '123456789',
      password: '12345'
    },
    {
      username: 'Gary',
      email: 'gary15@gmail.com',
      phonenumber: '987654321',
      password: '67890'
    }
  ];

  signup(user: User): Observable<any> {
    const existingUser = this.users.find(u => u.email === user.email);

    if (existingUser) {
      return throwError(() => new Error('User with this email already exists'));
    }

    this.users.push(user);
    return of({ message: 'User registered successfully' });
  }


  login(credentials: { email: string; password: string }): Observable<any> {
    const user = this.users.find(
      u => u.email === credentials.email && u.password === credentials.password
    );

    if (user) {
      return of({ message: 'Login successful', user: user });
    } else {
      return throwError(() => new Error('Invalid email or password'));
    }
  }

  getUsers(): User[] {
    return this.users;
  }
}
