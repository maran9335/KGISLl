// create the array 

var Products = ["mobile","Laptop","Fridge","Watch","Mixer"]
document.write(Products + "<br>")

document.write(Products[3] + "<br>")
document.write(Products[0] + "<br>")
document.write(Products.length + "<br>")

// iterate array using for 

for(var i=0; i<Products.length;i++){
    document.write(Products[i]+ "<br>")

}

// For in --Looping all elements

for(i in Products){
    document.write(Products[i]+ "<br>")
}
// for of --- array  Iterate  Over array 

for(var a of Products){
    document.write(a + "<br>")
}


// add and remove the array element

// push used to insert array element at end
Products.push("T.V")
document.write(Products + "<br>")

//unshift used to insert array element at start
Products.unshift("Bike")
document.write(Products + "<br>")

//pop used to remove the array element at end
Products.pop()
document.write(Products + "<br>")

//shift used to remove the array element at start
Products.shift()
document.write(Products + "<br>")

// add and remove the element at any position
            
// splice(startIndex, delecount ,element1 , element2)

//mobile,Laptop,Fridge,Watch,Mixer

Products.splice(2,0,"Bike","T.v")
document.write(Products + "<br>")
// mobile, Laptop,Bike,T.v, Watch, Mixer

Products.splice(1,5,"Tab","Cycle","Table")
document.write(Products + "<br>")
//mobile, Tab,Cycle,Table ,Mixer

// Slice 
//Which the Shallow copy 

//slice(start_position, end_position)

var copyProducts = Products.slice(2,4)
document.write(copyProducts + "<br>")

// Create the String from an array 

document.write(Products.join("@") + "<br>")
document.write(Products.toString() + "<br>")

// Merge the two array 

document.write(Products.concat(copyProducts) + "<br>")

// Searching through array 

document.write(Products.indexOf("Table") + "<br>")

document.write(Products.includes("Tabs") + "<br>")

// Find and filter the array 

const num = [1,2,3,4,5,6,7,8,9]
const result = num.find(function(a){
    return a>5
})

document.write(result+ "<br>")

const number =[1,2,3,4,5,6,7,8,9]
const results = number.filter(function(a){
    return a>5
})

document.write(results+ "<br>")


// object is an collection of Properties

let details = {
    firstname:"Keerthana",
    age:25,
    mobile:454356547,
    city:"Chennai"
}

document.write(details)
console.log(details)

// Access the object 

//Dot
//Bracket
document.write(details.city + "<br>")
document.write(details["firstname"] +"<br>")


// Key as a variable 

let name = "firstname"
document.write(details[name] +"<br>")

// modify the object 

details.firstname = "Asha"
console.log(details)

// add the new item in object 

details.gender ="Female"
console.log(details)


//values 

// function
// array
//object


let Tickets = {
 name:"Nisha",
 status: function(){
    return "Reading the books"
 },
 hobbies:["playing","drawing","sleeping","dancing"],
 info: {
     firstname:"Keerthana",
    age:25,
    mobile:454356547,
    city:"Chennai"
}

}















