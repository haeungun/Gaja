import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { UserData } from '../models/user-data.model';

@Injectable()
export class AuthService {

    constructor(public auth: AngularFireAuth,
                public database: AngularFireDatabase) {}

    // Create account on firebase with email and password
    signUpUser(user: UserData) {
        this.auth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .catch(function (error) {
                console.log(error);
            });
    }

    // Sign in with email and password
    signInUser(user: UserData) {
        this.auth.auth.signInWithEmailAndPassword(user.email, user.password)
            .catch(function (error) {
                console.log(error);
            });
    }

    // Log out
    signOutUser() {
        this.auth.auth.signOut();
    }

    // Store user information
    saveUserData(user: UserData) {
        // TODO: When user sign up, user information should be stored.
    }

    // Check if user is currently logged in
    isAuthenticated() {
        let user = this.auth.auth.currentUser;
        if (user) {
            return true;
        } else {
            return false; 
        }
    }

}
