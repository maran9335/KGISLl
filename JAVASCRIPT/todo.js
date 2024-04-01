let myform=document.getElementById("myform")
let myinput=document.getElementById('myinput')
let mylist=document.getElementById('mylist')

myform.addEventListener("submit",

(data) => {
    data.preventDefault()
   createitem(myinput.value)
}

)
 createitem=(d) =>{
    let mytemplate=` <li>${d}<button>delete </button></li>`
    mylist.insertAdjacentHTML("beforeend", mytemplate)
    myinput.value=''
    myinput.focus
    ()
 }
 let deleteitem