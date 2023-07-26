const form=document.getElementById('form');

form.addEventListener('submit',function(event){
    event.preventDefault()//Prevents the form from auto submitting

    let name =document.getElementById('name').value
    console.log(name)

     let email =document.getElementById('email').value
     console.log(name)

     let IdNumber =document.getElementById('IDnumber').value
     console.log(IdNumber)


})