//Functions

//function addTwoNumbers(number1,number2){
    //console.log(number1+number2);
//}
//const result=addTwoNumbers(3,4);//7
//console.log("Result:",result) //Result: undefined


function addTwoNumbers(number1,number2){
   let result= number1+number2
   return result
}
 //const result=addTwoNumbers(3,4);//7
 //console.log("Result:",result) 

 //2
 //function loginUserMessage(userName){
  //  return `${userName} just signed in`
 //}
 //loginUserMessage("User")//nothing runs here
 //so  use this
 //console.log(loginUserMessage("user"));//user just signed in
 //console.log(loginUserMessage())//undefined just signed in
   

function LoginUserMessage(Username){
    if(!Username){//this means Username is undefined or not present
        console.log("please add a username")
    }
    return `${Username} just signed in`
}
console.log(LoginUserMessage())
//please add a username
//undefined just signed in
//

 