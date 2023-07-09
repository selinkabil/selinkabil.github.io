
  $(document).ready(function (){
    $('.submit').click(function (event){
    const names = document.forms[0].elements[0];
    const email = document.forms[0].elements[1];
    const message = document.forms[0].elements[2];
    const invalid = document.getElementById('message');
  
    if (names.value === "" || email.value === "" || message.value === "") {
      invalid.style.display = "block";
      invalid.innerHTML = "All fields are required"
      event.preventDefault();
    }
    else{
        invalid.style.display = "none";
        console.log("clicked")
    }
  })
  })
