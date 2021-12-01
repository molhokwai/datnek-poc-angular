import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { UserLanguage } from './user-languages';

// array in local storage for registered users
const usersKey = 'nkensa-datnek-poc-angular';
const usersJSON = localStorage.getItem(usersKey);
let users: any[] = usersJSON ? JSON.parse(usersJSON) : [];


@Injectable({
  providedIn: 'root'
})
export class UserLanguageService {

  items: UserLanguage[] = [];
  constructor(private http: HttpClient) { }


  save(userLanguage: UserLanguage) {
    let msg
    let user = users.find(x => this.match(x, userLanguage))
    
    if (user) {
        /* `User/Language ${userLanguage.userName}/${userLanguage.language} already exists` */
        msg = `Update`
        Object.assign(user, userLanguage)
    } else {
        users.push(userLanguage)
        msg = `Create`
    }

    localStorage.setItem(usersKey, JSON.stringify(users));
    return [users, msg]
  }


  read(userLanguage: UserLanguage) {
    let msg = `Read`
    let user = users.find(x => this.match(x, userLanguage))
    return [user, msg]
  }


  delete(userLanguage: UserLanguage) {
      users = users.filter(x => this.match(x, userLanguage));
      localStorage.setItem(usersKey, JSON.stringify(users));
  }


  match(x: UserLanguage, y: UserLanguage) {
      return x.userName === y.userName &&  x.language === y.language
  }


  getItems() {
    return users;
  }

  getLanguages() {
    let languages = users.map(x => x.language)
    return languages.filter((n, i) => languages.indexOf(n) === i)
  }

  getLanguagesCount() {
    return this.getLanguages().length
  }


  fetchItems() {
    return this.http.get<UserLanguage[]>('/assets/user-languages.json');
  }

  clearItems() {
    this.items = [];
    return this.items;
  }
}
