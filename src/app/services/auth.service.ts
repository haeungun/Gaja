import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import * as model from '../models/builder';

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
    signUpUser(email, password, name, tel, rule) {
        let vm = this;
        this.auth.auth.createUserWithEmailAndPassword(email, password)
            .then(function() {
                vm.saveUserData(email, name, tel, rule);
            })
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
    saveUserData(email, name, tel, rule) {
        // Adding new user information in users node
        let uid = this.getCurrentUid();
        // Create user object
        let user = this.userData(email, name, tel, rule);
        // Push in database
        this.database.object('/users/' + uid).set(user);
    }

    userData(email, name, tel, rule) {
        var user: model.BuilderPattern.User = new model.BuilderPattern.UserBuilder(email)
                                                    .setName(name)
                                                    .setTel(tel)
                                                    .setRule(rule)
                                                    .builder();
        return user;                                        
    }

    userRule() {
        if (this.isAuthenticated()) {
            var rule;
            let uid = this.getCurrentUid();

            this.database.object('/users/' + uid).subscribe(info => {
                rule = info.rule;
            });               
        }

        return rule;
    }

    getCurrentUid() {
        var uid = this.auth.auth.currentUser.uid;
        return uid;
    }

    getUserInfoByUid(uid) {
        return this.database.object('/users/' + uid);
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
