// data type 
// int: 
let  x = 1;
// float : 
let  a = 2.4;
// string :
let  b = "hello";
// boolean :
let  c = true;
let  d = false;
// undefined :
let  e;
// null :
let  f = null;
// object :
let  g = {
    id : 1,
    name : "Maher",
    age : 22,
    address : "Morrco",
    phone : "0623329476",
    email : "Noureddinemaher13@gmail.com",
}
// To acces TO object 
    console.log(g.name);
    // Maher
// array :
let  h = ["maher", "noureddin", 13 , 2.4, true,false,null,undefined,];
// To acces TO Array
    console.log(h[0]); 
    // Maher

// Object Inside Array 
const Maher = [
    {
        id:1,
        text:'First Object',
        isCompleted : true
    },
    {
        id:2,
        text:'Second Object',
        isCompleted : false
    }
];

// To acces 
console.log(Maher[1].text);
// Second Object



// Json : DATA FORMAT FOR API OR SENDING DATA 
// To convert to JSON 
const MaherJSON = JSON.stringify(Maher);
console.log(MaherJSON);

// Loops Js : 
//For : 
for( let i =0; i < 10 ; i++) {
    console.log(i);
}
// result : 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// or 
for(let i =0; i < 10 ; i++) {
    console.log('For Loop Number : ${i}');
}
// ...

let i = 0;
while (i <10 ){
    console.log('While loop Number : ${i}');
    i++
}
// 

// Foor loop for arrays :
for (let i=0; i < Maher.length; i++){
    console.log(Maher[i].text);
}

// for readble : 
for (let maher of Maher) {
    console.log(maher.text);
}

// foreach , Map , Filter :
// foreach : 
Maher.forEach(function(maher) {
console.log(maher.id);
});
// Map : 
const id = Maher.map(function(maher){
    return Maher.id;
});
console.log(id);
// filter :
const isCompleted = Maher.filter(function(maher){
    return maher.isCompleted === true;
});
console.log(isCompleted);













    

