export class AuthService{
    loggedIn = false;

    isAuthenticated(){
        const promise = new Promise(
            (resolve, reject)=>{
                setTimeout(() =>{
                    console.log("in the promise" +  this.loggedIn);
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }
    login(){
        this.loggedIn = true;
        console.log(this.loggedIn);
    }

    logout(){
        this.loggedIn = false;
    }
}