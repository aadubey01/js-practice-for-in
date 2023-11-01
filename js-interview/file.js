//Types of Arrays
//Numerical type
const arr=[1,2,4]
//string based
const arr1=["man","woman"]
//defining array
const myarr=new Array(23,45,67,78);
//let n= myarr.length;

console.log(myarr[0]);
//remember about shallow copy and deep copy 
//myarr.unshift(4) //to return it run shift operation
//console.log(myarr.includes(5));//this results in bool true or false
//console.log(myarr.indexOf(7));//this gives -1 or the index of ele.

//slice vs splice
const myar= new Array(0,1,2,3,4,5);
console.log("og",myar);
const myn1=myar.slice(1,3);
console.log("Slice operation",myn1);
console.log("og after slice",myar);

const myn2 = myar.splice(1,3)
console.log("splice operation",myn2);
console.log("og after splice",myar);
//og [ 0, 1, 2, 3, 4, 5 ]
//Slice operation [ 1, 2 ]
//og after slice [ 0, 1, 2, 3, 4, 5 ]
//splice operation [ 1, 2, 3 ]
//og after splice [ 0, 4, 5 ]




//console.log(myarr);