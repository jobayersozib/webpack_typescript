 

 import {Base} from './ano';
 
class Test extends Base{
     constructor(){
         super()
         console.log("Constructing....")
         console.log(document.getElementById("elm").getAttribute("id"))
     }

    public sum(num1:number,num2:number){
       console.log(this.multiply(num1,num2,10))
        return num1+num2; 
    }
}


const obj=new Test();

console.log(obj.sum(0,0))
