// var s1 ="Java script is very easy to leanr J J";
//  var s2 =/is/ig;
// console.log(s1.search(s2));

    //regexp method
// var s1 ="Java script is very easy to leanr J asaJ"
// var s2 = new RegExp("a", "i")
// console.log(s1.match(s2));

            //bracket
// var a="elephent";
// var b =/[e]/g;
// console.log(a.match(b))
    // not ^
// var a="elephen t";
// var b =/[^e]/g;
// console.log(a.match(b))

//meta characters
//var meta1 =" % $ <> \t  Java 3script \n is 5veryjavaeasy angry to leanr J asJ"
//var meta2 =/\w/g;
// var meta2 =/\W/g;
 //var meta2 =/\d/g;
 //var meta2 =/\D/g;
// var meta2 =/\s/g;
// var meta2 =/\S/g;
 //var meta2 =/\bja/ig;
// var meta2 =/ry\b/g;
 //var meta2 =/\n/g;
//var meta2 =/\t/g;
// var meta2 =/\v/g;
// var meta2 =/\S/g;

// console.log(meta1.search(meta2));
                // quantifiers
//  var meta1 =" % $ <> \t  Java 10 12003  547 script \n is 5veryjavaeasy angry to leanr J asJ"
// var meta2=/ \d{3,4}/gi;
//  console.log(meta1.match(meta2));
let a= "hello world";
//let b =/^he/g
let b =/ld$/g
console.log(a.match(b))