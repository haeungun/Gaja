export namespace BuilderPattern {
    export class UserBuilder {
        private email: string;
        private name: string;
        private tel: string;
        private rule: string;

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

        setRule(v: string): UserBuilder {
            this.rule = v;
            return this;
        }

        get Rule() {
            return this.rule;
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
        private title: string;
        private tel: string;
        private category: string;
        private rule: string;
        //private wating?; // Current waiting list

        constructor(title: string) {
            this.title = title;
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

        setRule(v: string): StoreBuilder {
            this.rule = v;
            return this;
        }

        get Rule() {
            return this.rule;
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
        private rule: string;

        constructor(builder: UserBuilder) {
            this.email = builder.Email;
            this.name = builder.Name;
            this.tel = builder.Tel;
            this.rule = builder.Rule;
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

        get Rule() {
            return this.rule;
        }
    }

    // Store model
    export class Store {
        private title: string;
        private tel: string;
        private category: string;
        private rule: string;
        private wating;

        constructor(builder: StoreBuilder) {
            this.title = builder.Title;
            this.tel = builder.Tel;
            this.category = builder.Category;
            this.rule = builder.Rule;
            //this.wating = builder.Waiting;
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

        get Rule() {
            return this.rule;
        }
        
        get Waiting() {
            return this.wating;
        }
    }
}