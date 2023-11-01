// singleton or constructor based definition of objects;
const user = new Object();
user.id="ab124"
user.name="aaki"
//console.log(user)

const regular={
    email:"h@gmail.com",
    fullname:{
        userFull:{
            first:"Hit",
            second:"chan",
        }
    }
}
//console.log(regular.fullname.userFull.second);
//merging objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
 //const obj3= Object.assign(obj1,obj2)
 const obj3= Object.assign({},obj1,obj2)
 //console.log(obj3);

 //spread
 const obj4= {...obj1,...obj2}
 const obj5={...obj1,...obj2,...obj3}
// console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//array of objects
const users=[
    {
        id:"123abc",
        email:"aaki@servicenow.com"
    },
    {
        id:"123abc",
        email:"aaki@servicenow.com"
    },
    {
        id:"123abc",
        email:"aaki@servicenow.com"
    }
]
users[1].email
console.log(user);

console.log(Object.keys(user));// we have presnted the object 
//in the form of array, this is important as we can run loops over an array
// of objects.
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty("name"));
/* { id: 'ab124', name: 'aaki' }
[ 'id', 'name' ]
[ 'ab124', 'aaki' ]
[ [ 'id', 'ab124' ], [ 'name', 'aaki' ] ]
true*/