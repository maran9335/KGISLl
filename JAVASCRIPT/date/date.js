// Date and time 

let d = new Date()
document.write(d + "<br>")

// Initialze the date object 
//Date(year,month,day,hours,min,second,millisiconds)

let date =new Date(2023,2,3,13)
document.write(date + "<br>")

let today = new Date("09 May 2023" )
document.write(today + "<br>")
// create the date and time string

document.write(d.toDateString()+ "<br>")
document.write(d.toLocaleDateString()+ "<br>")
document.write(d.toString() + "<br>")
document.write(d.toTimeString() + "<br>")
document.write(d.toLocaleTimeString() + "<br>")

//Thu Dec 28 2023
//12/28/2023
//Thu Dec 28 2023 09:28:37 GMT+0530 (India Standard Time)
//09:28:37 GMT+0530 (India Standard Time)
//9:28:37 AM


// Getting the specific Date and time 

// document.write(d.getDate()+ "<br>")      //28

// document.write(d.getDay()+ "<br>" ) // 4
// document.write(d.getFullYear() + "<br>") // 2023
// document.write(d.getMonth()+ "<br>") // 11

// document.write(d.getHours() + "<br>")
// document.write(d.getMinutes() + "<br>")
// document.write(d.getSeconds() + "<br>")


//Setting the date and years

//add the 2 years from the current 
//  d.setFullYear(d.getFullYear()+5)
// document.write(d)

//  3.17 

 // Math.PI)

// area of circle 

 function circle (radius){
    var area = (Math.PI)*radius*radius
    return area
 }

 document.write(circle(3) + "<br>")

 // Abouslute 

 document.write(Math.abs(-3) + "<br>")
 document.write(Math.abs(3) + "<br>")


 // Rounding number 
 document.write(Math.ceil(-3.5)+ "<br>" )
 document.write(Math.round(-3.5)+ "<br>" )
 document.write(Math.floor(-3.5)+ "<br>" )

// min and max 
document.write(Math.max(2,56,67,89,24,6) + "<br>")
document.write(Math.min(2,56,67,89,24,6, -89) + "<br>")

//
document.write(Math.pow(3,3) + "<br>")

document.write(Math.sqrt(49) + "<br>")


// Random number  -- otp

// Math.Random()

var randomNumber = Math.random()
document.write(randomNumber + "<br>")

var four =   Math.floor(Math.random()*100000) +1
document.write(four + "<br>")



 


