let form = document.getElementById('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if(name !== ""){
         if(email !== ""){
                 if(message !== ""){
                    alert('Thank You for your Message');
                }else{
                    document.getElementById('text-error').innerHTML = "Please Enter Message";
                }
            }else{
                document.getElementById('email-error').innerHTML = "Please Enter Email";
            }
    }else{
        document.getElementById('name-error').innerHTML = "Please Enter Name";
    }

})