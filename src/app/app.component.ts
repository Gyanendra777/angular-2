import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor() {  
// lat
let scores = [23,34,56 ,34,45,67,89,1,2,46,67,]
// for (const iterator of scores) {
//   console.log(iterator);
// }

for (const iterator of scores) {
  for (let i =1; i <= 11; i++) {
  
    console.log('scores'+ '_ '+i +"= "+ iterator);
    break
  }
  // console.log()
}

    let x = 10;
    // let x = 10;
    for (var i = 1; i < 5; i++) {
       console.log( `inside the loop : `+i);
      // setTimeout(() =>  console.log( `inside the loop : `+i), );

      
    }
    console.log( `inside the loop : `+i)
    if (x==10) {
      let x= 20;
      console.log(x)
    }
    console.log(x); 
// var
    var y = 30;
    
    if (y==30) {
      var y= 40;
      console.log(y)
    }
    console.log(y);  
// const   

const colors = ['red'];
colors.push('green')
colors.push('pink')
console.log(colors)
colors.pop();

console.log(colors)


const person = {age:23};
let aa = person.age=30000;
console.log(aa);


    const z = 80; 
    // const z = 20;  
    if (z==80) {
      const z = 100;
      console.log(z)
      
    }
    console.log(z);  
  }


  } 
     

