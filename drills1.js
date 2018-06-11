'use strict';

function yearOfBirth (age) {
  if (age <0 ) {  
    throw new Error('Age can not be negative');
  }
  else if (typeof age != number){

  }
  else{
    return 2018 - age;
  }
}
//try { 
 // yearOfBirth(-10);
//}
//catch(e){
 // console.log(e.message); 
//}

function whoAmI (name, age){
  console.log(`Hi, my name is ${name} and I'm ${age} years old`);
  console.log(`I was born in ${yearOfBirth(age)}`);
}
whoAmI('Chris', 25);
