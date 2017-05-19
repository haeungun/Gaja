import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { UserData } from '../models/user-data.model';

@Injectable()
export class AuthService {

    constructor(public auth: AngularFireAuth,
                public database: AngularFireDatabase) {}

    signUpUser(user: UserData) {
        this.auth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .catch(function (error) {
                console.log(error);
            });
    }

    signInUser(user: UserData) {
        this.auth.auth.signInWithEmailAndPassword(user.email, user.password)
            .catch(function (error) {
                console.log(error);
            });
    }

    signOutUser() {
        this.auth.auth.signOut();
    }

    isAuthenticated() {
        let user = this.auth.auth.currentUser;
        if (user) {
            return true;
        } else {
            return false; 
        }
    }
}
