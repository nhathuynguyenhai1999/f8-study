let rules;

function Validator(options) {
  function getParent(element,selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }
  console.log(options.form);
  let formElement;
  function validator(inputElement,rule) {
    const ErrorMessage = getParent(inputElement,'.').querySelector(options.errorSelector);
    const errorMessage = rule.test(inputElement.value);
    if (errorMessage) {
      let errorElement;
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add('invalid');
    } else {
      let errorElement;
      errorElement.innerText = '';
      inputElement.parentElement.classList.remove('invalid');
    }
  }

  function validate(inputElements, rules) {
    const errorElements = inputElements.parentElement.querySelector(options.errorSelector);
    const errorMessage = rules.test(inputElements.value);
    if (errorMessage) {
      errorElements.innerText = errorMessage;
      inputElements.parentElement.classList.add('invalid');
    } else {
      errorElements.innerText = '';
      inputElements.parentElement.classList.remove('invalid');
    }
    return !errorMessage;
  }


  if (formElement) {
    formElement.onsubmit = function(e){
      e.preventDefault();
      let isFormValid = true;
      options.rules.forEach(function(rule){
        const inputElement = formElement.querySelector(rule.selector);
        const isValid = validate(inputElement, rule);
        if (!isValid){
          isFormValid = false;
        }
        validate(inputElement, rule);
      });
      if (isFormValid){
        if(typeof options.onsubmit === 'function'){
          const enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
          const formValues = Array.from(enableInputs).reduce(function(values, input){
            values[input.name] = input.value;
            console.log((values[input.name] = input.value) && values);
            switch(input.type){
              case 'radio':
                values[input.name] = formElement.querySelectorAll('input[name="'+ input.name + '"]:checked').value;
              case 'checkbox1':
                if(input.matches(':checked')){
                  values[input.name] = formElement.querySelectorAll('input[name="'+ input.name + '"]:checked').value;
                }else{
                  values[input.name] = '';
                  return values;
                }
                if (Array.isArray(values[input.name])) {
                  values[input.name] = [];
                }else {
                  values[input.name].push(input.value);
                }
                break;
              case 'checkbox2':
                let rule;
                let errorMessage = formElement.querySelectorAll(rule.selector + ':checked').length ? undefined : 'Please select an option'
                break;
              case 'file':
                values[input.name] = input.files;
                defaults:
                  values[input.name] = input.value;
            }
            return (values[input.name] = input.value) && values;
          },{});
          console.log(formValues);
          console.log(enableInputs.reduce());
          options.submit(formValues);
          options.onsubmit(
            {
              name:'Nguyen Hai Nhat Huy'
            });}
        console.log('không có lỗi!!!');
      }else{formElement.submit();console.log('có lỗi!!!');}}
    options.rules.forEach(function(rule) {
      const inputElement = formElement.querySelectorAll(rule.selector);
      Array.from(inputElements).forEach(function(inputElement){
        const isValid = validate(inputElement, rule);
        let isFormValid;
        if (isValid) {
          isFormValid = false;
        }});
      const errorElement = inputElement.parentElement.querySelector('.form-message');
      let selectorRules;
      selectorRules[rule.selector] = rule.test;
      if(Array.isArray(selectorRules[rule.selector])){
        selectorRules[rule.selector].push(rule.test);
      } else {selectorRules[rule.selector] = [rule.test];}
      console.log(rule.selector);
      function validate(inputElement, rule) {
        const errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        const errorMessage = rule.test(inputElement.value);
        if (errorMessage) {
          errorElement.innerText = errorMessage;
          inputElement.parentElement.classList.add('invalid');
        } else {
          errorElement.innerText = '';
          inputElement.parentElement.classList.remove('invalid');
        }
        return !errorMessage;
      }
      const inputElements = formElement.querySelectorAll(rule.selector);
      Array.from(inputElements).forEach(function(inputElement){
        inputElement.onblur = function() {
          validate(inputElement,rule);
        }
        inputElement.oninput = function(){
          const errorElement = getParent(inputElement, options.formGroupSelector).add('invalid');
          errorElement.innerText = '';
          getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }
      });
      if(inputElement){
        inputElement.onblur = function(){
          validate(inputElement, rule);
          const errorMessage = rule.test(inputElement.value)
          if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
          } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
          }
          console.log('blur' + rule.selector);
          console.log(inputElement.parentElement.querySelector('.form-message'));
        }
        inputElement.oninput = function (){
          errorElement.innerText = '';
          inputElement.parentElement.classList.remove('invalid');
          console.log(inputElement.value())
        }}
    });
  }
}

Validator.isRequired = function(selector) {
  return { selector: selector, test: function(value) { return value.trim() ? undefined:
      'Vui lòng điền ở dây.'
    }}
}
Validator.isEmail = function(selector) {
  return {
    selector: selector, test: function (value) {
      const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value) ? undefined : 'Đoạn này nên nhập là email.';
    }
  }
}
Validator.minLength = function(selector, min) {
  return {
    selector: selector,
    test: function(value) {
      return value.length >= min ? undefined : `Please enter at least ${min} characters`;
    }
  };
};
Validator.isConfirmed = function(selector, getCofirmValue, message) {
  return {
    selector: selector, test: function (value) {
      return value === getCofirmValue() ? undefined: message || 'Dữ liệu nhập vào không chính xác';
    }}}
Validator({
  form:'#form-1',
  formGroupSelector:'.form-group',
  errorSelector:'form-message',
  rules:[
    Validator.isRequired('#full-name'),
    Validator.isEmail('#email'),
    Validator.minLength('#password', 6),
    Validator.isRequired('input[name="gender"]'),
    Validator.isConfirmed('#province'),
    Validator.isConfirmed('#password_confirmation', function (){
      return document.querySelector('#form-1 #password').value;
    },'Mật khẩu nhập lại không chính xác')], onsubmit: function(data){
    console.log(data);
  }
});