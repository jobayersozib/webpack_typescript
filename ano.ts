 class Base {
    constructor(){
        console.log("Super class with import....")
    }
    protected multiply(a:number,b:number,c:number){
        return a*b*c;
    }
}

export {Base};