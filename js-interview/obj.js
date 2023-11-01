//objects can be defined in two ways -Literals and constructors 
//when made with constructor-Singleton, else not.


const mySym = Symbol("mykey");


//Object Literals-
const Juser={
    name:"aakriti", // name is taken as string in here
    "Full Name":"aakriti Dubey",
    age:18,
    [mySym]:"mykey",
    Address: "Gorakhpur",
    email:"aakritidubey@gmail.com",

}
//two ways are there to access the values:

/*console.log(Juser.email);
//console.log(Juser[email]);this will give error use ""
console.log(Juser["email"]);
//console.log(Juser.Full Name); //this will also give error thus 
console.log(Juser["Full Name"]);
console.log(Juser[mySym]);
console.log( typeof Juser[mySym]);*/


/*Juser.email="aakriti@servicenow.com"
Object.freeze(Juser);
Juser.email="dubey@servicenow.com"
console.log(Juser);*/
/* {
  name: 'aakriti',
  'Full Name': 'aakriti Dubey',
  age: 18,
  Address: 'Gorakhpur',
  email: 'aakriti@servicenow.com',
 // [Symbol(mykey)]: 'mykey'//it is symbol here 
}*/
Juser.greeting = function(){
    console.log("hello User");

}
Juser.greetin2 = function(){
    console.log(`hello user ${this.name}`)

}
//console.log(Juser.greeting);//[Function (anonymous)]

//console.log(Juser.greetin2);//[Function (anonymous)]


console.log(Juser.greeting());
console.log(Juser.greetin2());
/* hello User
undefined
hello user aakriti
undefined*/

// always use . dot operator , in some cases use [] whereever needed