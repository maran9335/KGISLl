
// create the object 
function submitForm(){
    var Studentdetails = {
        name:document.getElementById("name").value,
        gender:document.querySelector('input[name="gender"]:checked').value,
        age:document.getElementById("age").value,
        email:document.getElementById("email").value,
        location:document.getElementById("location").value
    }


//Convert the data into json

var formatData = JSON.stringify(Studentdetails)

// send the data to api
// post

fetch('https://65a8f935219bfa3718681011.mockapi.io/MM',{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body:formatData
})


.then(response => response.json() )
.then(data=>{
    console.log('Data is sucessfully inserted',data)
    alert("Data saved successfully")
})
.catch(error =>{
    console.error('Error:',error)
})
}

