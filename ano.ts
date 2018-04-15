type INFO={name:string,mobile:number}


class Base {
    protected info:INFO;
    constructor(){
        console.log("Super class with import....")
    }
    protected multiply(a:number,b:number,c:number){
        return a*b*c;
    }
}

export {Base};