import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class AuthService {

    users: FirebaseListObservable<any>;
    stores: FirebaseListObservable<any>;

    constructor(public auth: AngularFireAuth,
                public database: AngularFireDatabase) {
                    this.users = database.list('/users');
                    this.stores = database.list('/stores');
                }
            

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
        // Adding new user information in users node
        this.users.push(user);
    }

    // Save store information
    saveStoreData(store) {
        // Adding new store in stores node
        this.stores.push(store);
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

    getCurrentUid() {
        var uid = this.auth.auth.currentUser.uid;
        return uid;
    }

}
