 

import {Base} from './ano';
 
class Test extends Base{
     constructor(){
         super()
         console.log("Constructing....")
         this.info={name:"jobayer", mobile:1717979764}
         console.log(this.info)
     }

    public sum(num1:number,num2:number){
       console.log(this.multiply(num1,num2,10))
        return num1+num2; 
    }
}


const obj=new Test();

console.log(obj.sum(10,10))




function QUEUE(){
    this.container=[];
    this.pointer=null;
    this.pop=function(){
      if(this.container.length>0){
        if(this.pointer===null){
           console.log(this.container[this.container.length-1])
           this.pointer=this.container.length-2
        }
        if(this.pointer<0){
          console.log("Queue empty")
          //return;
        }
        if(this.pointer>=0){
          var temp=this.pointer;
          console.log(this.container[this.pointer])
          this.pointer=temp-1;
        }
        
         //this.pointer=
        
      }else{
        console.log("Queue is empty")
      }
    }
    
  }
  
  var obj=new QUEUE()
  
  // obj.container.push(1)
  // obj.container.push(2)
  // obj.container.push(3)
  // obj.container.push(4)
  // obj.container.push(4)
  
  obj.pop()
  obj.pop()
  obj.pop()
  obj.pop()
  
  
  
  