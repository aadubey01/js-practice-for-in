let a =300;// this will have global scope over the code
if(true){
    let a =10
    const b = 20
    console.log("INNER: ",a); //block scope
}
console.log(a);

//within windows the global scope is differnt then the global scope in node
//2-wherever we are seeing a {} that is block scope(not in objects)