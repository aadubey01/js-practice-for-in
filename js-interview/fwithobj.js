function calculateCartPrice(val1,val2,...num1){//the triple dots(...) are not spread operator but 
    //rather rest operator . They change according to use cases.
    return num1
}

console.log(calculateCartPrice(200,300,500,2000));//it (rest operator wraps the values)

// when we are giving val1, val2 as parameter to the function 
// first value is stored in val1 that is 200,next 300 is stored in val2
// now the ...num1 is wrapping remaining values inside an array.


//this is simple way of passing object to a function
//const user={
  //  username:"aa123",
    //price:"399"
//}

function handleObject(any){
    console.log(`username is ${any.username} and price is ${any.price}`)
}
//handleObject(user)

// passing an object directly to a function
handleObject({
    username:"ab123",
    price:"399"
})