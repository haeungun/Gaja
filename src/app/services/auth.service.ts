import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthService {

    constructor(public auth: AngularFireAuth,
                public database: AngularFireDatabase) {}

    // Create account on firebase with email and password
    signUpUser(email, password) {
        this.auth.auth.createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
                console.log(error);
            });
    }

    // Sign in with email and password
    signInUser(email, password) {
        this.auth.auth.signInWithEmailAndPassword(email, password)
            .catch(function (error) {
                console.log(error);
            });
    }

    // Log out
    signOutUser() {
        this.auth.auth.signOut();
    }

    // Save user information
    saveUserData(user) {
        // TODO: When user sign up, user information should be stored.
    }

    // Save store information
    saveStoreData(store) {
        // TODO
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
