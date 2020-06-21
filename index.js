console.log('Hellow World');

//variables in JS script;
var x = 10; 
var y =12
var z = x * y
console.log(z);

//precendence in js script
console.log(6+4*5); // especting 26 meaning multiplication is solved before addition

console.log(2+4**2); //expecting 18
// meaning power is solved before addition

let a;
let b;
console.log(a=b=5);

//understanding sequence 


    var t = 1;
    var w = 2;
    var u = 3;
    t = w;
    u = t;

console.log(t);

// understanding functions

function sum(a,b){
    return a+b;
}
let result =sum(3,4)
console.log(result);


// Understanding methods 
var person= {
    firstname:"Daniel",
    Lastname: "Anini Baah",
    id: 5566,
    }
    console.log(person); //

// Understanding parameters;
x = findMax (1,200,300,500,700);
function findMax(){
   var i;
   var max = -Infinity;
   for (i =0; i< arguments.length; i++) {
       if (arguments [i] >max)
       Max =arguments [i]; 
    }
}
console.log(Max);

//understanding pass by value
function square(x) {
    x= x*x; 
}
var y= 10;
square(y);
console.log(x); // the Y value is passed to x byt y remains unchanged.
// if javascript was to run in pass by ref y wud have been 100.

function turnOn(X) { //under standing passby ref
    X.isOn = true;
}
var y = {
isOn: false
};
turnOn(y);
console.log(y);

// Understanding searching 
const alligator = ["thick scales", 80, "4 foot tail", "rounded snout"];

alligator.includes("thick scales"); // returns true
console.log(alligator.includes('thick scales'));

// understanding accessors using the get lang()
var person = {
    firstName: "John",
    lastName : "Doe",
    language : "en",
    get lang() {
      return this.language;
    }
  };
  console.log(person.language);
  