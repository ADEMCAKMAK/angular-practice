export class User {
    constructor(public email: string,
        public id: string,
        private _token: string, 
        private tokenExpireDate: Date){

    }

    get token() {
        if( !this.tokenExpireDate || new Date() > this.tokenExpireDate ){
            return null;
        }
        return this._token;
    }
}