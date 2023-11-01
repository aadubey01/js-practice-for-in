//Destructuring of Objects
const course={
    name:"Javascript made easy",
    price:"999",
    CourseMentor:"Hitesh"

}
//Intead of writing
console.log(course.CourseMentor);
//over and over again ,we could write them like following

const {CourseMentor}=course
console.log(CourseMentor)

//if we want to assign a short name to the key we can do so
const {CourseMentor:Mentor}= course;
console.log(Mentor);

//JSON

{ 
"name":"Javascript made easy",
"price":"999",
"CourseMentor":"Hitesh"  //that's it ! this is a javascript object Notation
}