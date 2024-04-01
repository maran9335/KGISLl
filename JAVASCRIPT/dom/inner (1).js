 //




// function display(){
//     var a = document.getElementById("textbox").value;
//   var b = document.getElementById("para")
//   b.innerHTML="Result:"+ a
// }
// display()

/*function display() {
    var first = parseFloat(document.getElementById("first_num").value);
    var second = parseFloat(document.getElementById("second_num").value);
    var add = document.getElementById("add");
    var sub = document.getElementById("sub");
    var div = document.getElementById("div");
    var mul = document.getElementById("mul");
    var sum= first+second
    var subraction = first-second
    var multipication = first*second
    var division = first/second
    add.innerHTML=`ADD:${sum}`
    sub.innerHTML="Sub:"+subraction
    mul.innerHTML="mul:"+multipication
    div.innerHTML="div:"+division

}

var para = document.createElement("h2")
var text = document.createTextNode("hai how are ")
para.appendChild(text)
document.body.appendChild(para)

var div = document.createElement("div")
var bth =document.createElement("button")
var heading = document.createElement("h1")
var para = document.createElement("p")
var heading_text = document.createTextNode("This is the heading ")
var para_text = document.createTextNode("this the paragaraph")
var button = document.createTextNode("submit")
heading.appendChild(heading_text)
para.appendChild(para_text)
bth.appendChild(button)
div.appendChild(heading)
div.appendChild(para)
div.appendChild(bth)
document.body.appendChild(div)
heading.style.background="blue"
div.style.backgroundColor= "red"
div.style.color="white"
div.style.fontSize= "2rem"
div.style.padding ="10px"
div.style.margin="20px"


// var input = document.createElement("input")
// input.type="textbox"
// input.id="first_name"
// input.placeholder="Enter the name"
// var label = document.createElement("label")
// var labelText = document.createTextNode("first_name")
// label.appendChild(labelText)
// document.body.appendChild(input)
// document.body.appendChild(label)

// document.body.removeChild(input)
// // document.body.removeChild(div)

// var link = document.getElementById("link")
// var location =link.getAttribute("href")
// console.log("location")*/


//var input = document.getElementById("first_name")
//input.setAttribute("type","radio")

// var btn= document.getElementById("mybtn")
// btn.setAttribute("disabled","true")

 var link = document.getElementById("link")
   var view =link.getAttribute("href")
  document.write(view)

var image = document.getElementById("image")
var src = image.getAttribute('src')
console.log(src)

function submit(){
var name= document.getElementById("name").value
var password=document.getElementById("password").value
 if(name&&password){
    alert("You Login is Sucess")
 }
 else{
    alert("error Type Correct input")
 }
}





















    
