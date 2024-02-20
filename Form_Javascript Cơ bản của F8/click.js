let formElement;

function handleValidate(param) {
    location.href="login_validator.js";
}

formElement.onsubmit = function (event) {
  event.preventDefault();
  let formElement;
  const inputs = formElement.querySelectorAll('[name][rules]');
  let isValid = true;
  for(const input of inputs){
     console.log(input.value);
     if (!handleValidate({target: input})){
       isValid = false;
     }
  }
  // console.log(isValid);
  if(isValid){
    formElement.submit();
    if (this.onsubmit){
      this.onsubmit();
    } else{
      formElement.submit();
    }
  }
}