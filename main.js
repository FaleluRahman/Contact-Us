const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const queryType = document.querySelector('input[name="query-type"]:checked');
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("consent").checked;

  const formAlert = document.querySelectorAll(".form-alert");

  let isValid = true;

  // First Name
  if (firstName === "") {
    isValid = false;
    document.querySelector("#first-name + .form-alert").style.display = "block";
    document.querySelector("#first-name").style.border = "1px solid var(--Red)";
  } else {
    document.querySelector("#first-name + .form-alert").style.display = "none";
    document.querySelector("#first-name").style.border = "1px solid var(--Grey)";
  }

  // Last Name
  if (lastName === "") {
    isValid = false;
    document.querySelector("#last-name + .form-alert").style.display = "block";
    document.querySelector("#last-name").style.border = "1px solid var(--Red)";
  } else {
    document.querySelector("#last-name + .form-alert").style.display = "none";
    document.querySelector("#last-name").style.border = "1px solid var(--Grey)";
  }

  // Email Validation
  if (!isValidEmail(email)) {
    isValid = false;
    document.querySelector("#email + .form-alert").style.display = "block";
    document.querySelector("#email").style.border = "1px solid var(--Red)";
  } else {
    document.querySelector("#email + .form-alert").style.display = "none";
    document.querySelector("#email").style.border = "1px solid var(--Grey)";
  }

  // Query Type
  if (!queryType) {
    isValid = false;
    document.querySelector(".radio-inputs + .form-alert").style.display = "block";
  } else {
    document.querySelector(".radio-inputs + .form-alert").style.display = "none";
  }

  // Message
  if (message === "") {
    isValid = false;
    document.querySelector("#message + .form-alert").style.display = "block";
    document.querySelector("#message").style.border = "1px solid var(--Red)";
  } else {
    document.querySelector("#message + .form-alert").style.display = "none";
    document.querySelector("#message").style.border = "1px solid var(--Grey)";
  }

  // Consent
  if (!consent) {
    isValid = false;
    formAlert[5].classList.add("form-error");
  } else {
    formAlert[5].classList.remove("form-error");
  }

  // If form is valid
  if (isValid) {
    successMessage.classList.add("active");
    form.reset();
  }
});

// Email Validation Function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


// const form=document.getElementById("contact-form")
// const successMessage= document.getElementById("success-message")


// form.addEventListener('submit',(e)=>{
//     e.preventDefault()

//     const firstName= document.getElementById('first-name').value.trin()
//     const lastName= document.getElementById('last-name').value.trin()
//     const email= document.getElementById('email').value.trin()
//     const qurayType= document.getElementById('input[name="query-type"]:checked')
//     const message= document.getElementById('message').value.trin()
//     const consent= document.getElementById('consent').chacked

//     const formAlert= document.querySelectorAll('.form-alert')

//     let isVaild=true


//     //Firstname

//     if(firstName === ''){
//         isVaild = false

//         document.querySelector('#first-name + .form-alert').style.display = 'block'
//         document.querySelector('#first-name').style.border = '1px solid var(--Red)'

//     }else{
//         document.querySelector('#first-name + .form-alert').style.display = 'none'
//         document.querySelector('#first-name').style.border = '1px solid var(--Grey)'
//     }

// //LaSTNAME

// if(lastName === ''){
//     isVaild = false

//     document.querySelector('#last-name + .form-alert').style.display = 'block'
//     document.querySelector('#last-name').style.border = '1px solid var(--Red)'

// }else{
//     document.querySelector('#last-name + .form-alert').style.display = 'none'
//     document.querySelector('#last-name').style.border = '1px solid var(--Grey)'
// }

// //email vaildation
// if(isVaildEmail(email)){
//     isVaild =false

//     document.querySelector('#email + .form-alert').style.display = 'block'
//     document.querySelector('#email').style.border = '1px solid var(--Red)'

// } else{
//     document.querySelector('#email + .form-alert').style.display = 'block'
//     document.querySelector('#email').style.border = '1px solid var(--Grey)'
// }

// /// qurey type
// if(!qurayType){
//     isVaild =false

//     document.querySelector('.radio-inputs + .form-alert').style.display='block'
// }else{
//     document.querySelector('.radio-inputs + .form-alert').style.display='none'
// }
// //message validation
// if(message === ''){
//     isVaild=false

//     document.querySelector('#message + .form-alert').style.display='block'
//     document.querySelector('#message').style.display='1px solid var(--Red)'

// }else{
//     document.querySelector('#message + .form-alert').style.display='none'
//     document.querySelector('#message').style.display='1px solid var(--Grey)'
// }

// //consent valid
// if(!consent){
//     isVaild =false

//     formAlert[5].classList.add('form-error')
// }else{
//     formAlert[5].classList.remove('form-error')

// }


// // form is vaild
// if(isVaild){
//     successMessage.classList.add('active')
//     form.reset()
// }
// })

// // Email vaildation function

// function isVaildEmail(email){
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     return emailRegex.test(email)
// }