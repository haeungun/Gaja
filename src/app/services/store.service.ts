import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class StoreService {

    constructor(private database: AngularFireDatabase) {}

    addStore(aStore) {
        this.database.list('/stores').push(aStore);
    }

    addWaitingInStore(uid, user) {
        this.database.list('/stores/' + uid + '/waiting/').push(user);
    }

    getStoreByUid(uid) {
        return this.database.object('/stores/' + uid);
    }

    getAllStore() {
        console.log(this.database.list('/stores'));
        return this.database.list('/stores');
    }

    removeStore(uid) {
        this.getStoreByUid(uid).remove();
    }
}