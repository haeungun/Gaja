export namespace BuilderPattern {
    export class UserBuilder {
        private email: string;
        private name: string;
        private tel: string;

        constructor(email: string) {
            this.email = email;
        }

        get Email() {
            return this.email;
        }

        setEmail(v: string): UserBuilder {
            this.email = v;
            return this;
        }

        get Name() {
            return this.name;
        }

        setName(v: string): UserBuilder {
            this.name = v;
            return this;
        }

        get Tel() {
            return this.tel;
        }

        setTel(v: string): UserBuilder {
            this.tel = v;
            return this;
        }

        builder(): User {
            return new User(this);
        }
    }

    export class StoreBuilder {
        private email: string;
        private title: string;
        private tel: string;
        private category: string;
        //private wating?; // Current waiting list

        constructor(email: string) {
            this.email = email;
        }

        get Email() {
            return this.email;
        }

        setEmail(v: string): StoreBuilder {
            this.email = v;
            return this;
        }

        get Title() {
            return this.title;
        }

        setTitle(v: string): StoreBuilder {
            this.title = v;
            return this;
        }

        get Tel() {
            return this.tel;
        }

        setTel(v: string): StoreBuilder {
            this.tel = v;
            return this;
        }

        get Category() {
            return this.category;
        }

        setCategory(v: string) {
            this.category = v;
            return this;
        }
        /*
        get Waiting() {
            return this.wating;
        }

        setWaiting(v) {  // TODO: Waiting type...?
            this.wating = v;
            return this;
        }
        */
        builder(): Store {
            return new Store(this);
        }
    }

    // User model
    export class User {
        private email: string;
        private name: string;
        private tel: string;

        constructor(builder: UserBuilder) {
            this.email = builder.Email;
            this.name = builder.Name;
            this.tel = builder.Tel;
        }

        get Email() {
            return this.email;
        }

        get Name() {
            return this.name;
        }

        get Tel() {
            return this.tel;
        }
    }

    // Store model
    export class Store {
        private email: string;
        private title: string;
        private tel: string;
        private category: string;
        private wating;

        constructor(builder: StoreBuilder) {
            this.email = builder.Email;
            this.title = builder.Title;
            this.tel = builder.Tel;
            this.category = builder.Category;
            //this.wating = builder.Waiting;
        }

        get Email() {
            return this.email;
        }

        get Title() {
            return this.title;
        }

        get Tel() {
            return this.tel;
        }

        get Category() {
            return this.category;
        }

        get Waiting() {
            return this.wating;
        }
    }
}