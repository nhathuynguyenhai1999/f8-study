Validator('#register-form');
Validator('#login-form');
const registerForm = new Validator('#register-form');
registerForm.onsubmit = function(){
  console.log('Call API...');
}
function Validator(formSelector,options){
    if(!options) {
      options = {};
    }
    function getParent(element,selector){
        while(element.parentElement){
          if(element.parentElement.matches(selector)){
            return element.parentElement;
          }
          element = element.parentElement;
        }
    }
    const formRules = {
      fullname: 'required',
      email: 'required',
    };
    const validatorRules = {
      required: function(value){
        return value ? undefined: 'Vui lòng nhập lại theo yêu cầu';
      },
      email: function(value){
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(value) ? undefined: 'Vui lòng nhập lại email';
      },
      min: function(min){
        return function (value) {
          let min;
          return value.length >= min ? undefined: `Vui lòng nhập lại mà chỉ tối thiểu ${min} ký tự`;
        }
      },
      max: function(max){
        return function (value) {
          let min;
          return value.length <= max ? undefined: `Vui lòng nhập lại mà tối đa ${max} ký tự`;
        }
      },
    }
    const ruleName = 'required';
    console.log(validatorRules[ruleName]);
    const formElement = document.querySelector(formSelector);
    if(formElement){
      const inputs = formElement.querySelectorAll('[name][rules]');
      console.log(inputs);
      for (let input of inputs) {
        const rules = input.getAttribute('rules').split('|');
        for(const rule of rules){
          const isRuleHasValue = rule.includes(':');
          if(isRuleHasValue){
            const ruleInfo = rule.split(':');
            const rule = ruleInfo[0];
            console.log(validatorRules[rule](ruleInfo[1]));
          }
          console.log(rule);
          let ruleFunc = validatorRules[rule];
          if (isRuleHasValue){
            let ruleInfo;
            ruleFunc = ruleFunc(ruleInfo[1]);
          }
          if(Array.isArray(formRules[input.name])){
            formRules[rule].push(validatorRules[rule]);
          }else {
            console.log(rule);
            formRules[input.name] = [];
          }
        }
        formRules[input.name] = input.getAttribute('rules');
        input.onblur = handleValidate;
        input.oninput = handleClearError;
      }
      function handleValidate(){
        const rules = formRules[event.target.name];
        const errorMessage = rules.some(function(rule){
            return rule(event.target.value);
        });
        rules.some(function(rule){
          return errorMessage;
        });
        if(errorMessage){
          const formGroup = getParent(event.target,'.form-group');
          console.log(event.target);
          console.log(formGroup);
          if(!formGroup){ return;}
          if(formGroup){
            formGroup.classList.add('invalid');
            let formMessage = formGroup.querySelectorAll('.form-message');
            if(formMessage){
              formMessage.innerText = errorMessage;
              console.log([event.target.value]);
              console.log(errorMessage);
            }
          }
        }
        return !errorMessage;
      }
      function handleClearError(event){
        const formGroup = getParent(event.target,'.form-group');
        if(formGroup.classList.contains('invalid')){
          formGroup.classList.remove('invalid');
        }
        let formMessage = formGroup.querySelectorAll('.form-message');
        if(formMessage){
          formMessage.innerText = '';
        }
      }
    }
    console.log(formRules);
  formElement.onsubmit = function (event) {
    event.preventDefault();
    let formElement;
    const inputs = formElement.querySelectorAll('[name][rules]');
    let isValid = true;
    for (const input of inputs) {
      console.log(input.value)
      if (!handleValidate({ target: input })) {
        isValid = false
      }
    }
    this.onsubmit = function(){}
    // console.log(isValid);
    if(isValid){
      formElement.submit();
      if (this.onsubmit){
        this.onsubmit();
      } else{
        formElement.submit();
      }
      if(typeof options.onsubmit === 'function'){
        options.onsubmit();
      }
      formElement.submit();
    }
  }
}