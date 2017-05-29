import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class AuthService {

    constructor(private database: AngularFireDatabase) {}

    addStore(aStore) {
        this.database.list('/stores').push(aStore);
    }

    getStoreByUid(uid) {
        return this.database.object('/stores/' + uid);
    }

    getAllStore() {
        return this.database.list('/stores');
    }

    removeStore(uid) {
        this.getStoreByUid(uid).remove();
    }
}