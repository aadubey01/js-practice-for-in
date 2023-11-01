const marvel=["captain","thor","ironman"]
const dc=["batman","flash","supaerman"]

//marvel.push(dc) 
//this created nested array and if we wanted to
//access than do this
//console.log(marvel[3][1])
//console.log(marvel);

//better way is concat
//const all =marvel.concat(dc);
//console.log(all);

//best way is to use spread operator
//const another= [...marvel,...dc]
//console.log(another);
//flat
const arr=[1,2,3,[4,5,6],7,8,[9,[10,11]]]
const real= arr.flat(Infinity)
console.log(real);
/*[
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10,
  11
]*/
//isArray
//From
console.log(Array.from({value:01}))// gives [] as cant change it
//of