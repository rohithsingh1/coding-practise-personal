//const batman=require('./Superman');

//console.log(batman.getName());
//batman.setName('superMan123');
//console.log(batman.getName());


//const superman=require("./Superman");
//console.log(superman.getName());



const superHero=require("./Superman");

const batman=new superHero('batman');
console.log(batman.getName());
batman.setName('superman123');
console.log(batman.getName())


const superman=new superHero('superman');
console.log(superman.getName());






