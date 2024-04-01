//selecting bobpox box oerlay 
var popoverlay = document.querySelector('.popup-overlay')
var popbox =document.querySelector('.popup-box')
var addbtn=document.getElementById("add-pop")
addbtn.addEventListener("click",function(){
popoverlay.style.display="block";
popbox.style.display="block";
})
//select cancel button
var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(event){
event.preventDefault()
popoverlay.style.display="none"
popbox.style.display="none"
})
//select container,add,book-title, book-author,book-desc
var container= document.querySelector(".container")
var addbook = document.getElementById("add")
var booktitle= document.getElementById("book-title")
var bookdesc= document.getElementById("book-desc")
var bookauthor =document.getElementById("book-author")
addbook.addEventListener("click",function(event){
    var div=document.createElement("div")
    event.preventDefault()
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor}</h5>
    <p>${bookdesc}</p>
    <button onclick="deletebook(event)">Delete</button>
</div>`
    container.append(div);
    popoverlay.style.display="none"
    popbox.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}