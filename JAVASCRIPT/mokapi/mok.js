function submitform(){
    var studentdetails={
        name:document.getElementById("name").value,
      
        age:document.getElementById("age").value,
        email:document.getElementById("email").value,
        location:document.getElementById("location").value
    }
    var formdata=JSON.stringify(studentdetails)
    fetch('https://65a8f935219bfa3718681011.mockapi.io/MM',{
       method:'POST',
       headers:{
        'Content-type':'application/json'
       },
       body:FormData
    })
    .then(response=>response.json())
    .then(data=>{
        console.log('Data is sicess fiuolluy',data);
        alert('data saved')

    })
    .catch(error =>{
        console.error('error:',error)
    })

}