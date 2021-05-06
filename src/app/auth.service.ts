export class AuthService {
    loggedIn = false;

    login(): void {
        this.loggedIn = true;
    }

    logout(): void {
        this.loggedIn = false;
    }

    isAuth(): Promise<unknown> {
        const promise = new Promise(
            ((resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 750);
            })
        );
        return promise;
    }
}
