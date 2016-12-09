import { User } from "./user.interface";
import { Injectable } from "@angular/core";
import {Router} from "@angular/router";
import {Subject, Observable} from "rxjs";

declare let firebase: any;

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
      console.log(error);
    });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
      console.log(error);
    });
  }

  logoutUser() {
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
  }

  isAuthenticated() : Observable<boolean> {
    const SUBJECT = new Subject<boolean>();

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        SUBJECT.next(true);
      } else {
        SUBJECT.next(false);
      }
    });

    return SUBJECT.asObservable();
  }
}
