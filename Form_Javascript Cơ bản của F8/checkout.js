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
  return { selector: selector, test: function(value) { return value ? undefined:
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
document.addEventListener('DOMContentLoaded', function () {
  // Mong muốn của chúng ta
  Validator({
    form: '#form-1',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules: [
      Validator.isRequired('#fullname', 'Vui lòng nhập tên đầy đủ của bạn'),
      Validator.isEmail('#email'),
      Validator.minLength('#password', 6),
      Validator.isRequired('#password_confirmation'),
      Validator.isConfirmed('#password_confirmation', function () {
        return document.querySelector('#form-1 #password').value;
      }, 'Mật khẩu nhập lại không chính xác')
    ],
    onSubmit: function (data) {
      // Call API
      console.log(data);
    }
  });


  Validator({
    form: '#form-2',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules: [
      Validator.isEmail('#email'),
      Validator.minLength('#password', 6),
    ],
    onSubmit: function (data) {
      // Call API
      console.log(data);
    }
  });
});
// Đối tượng `Validator`
function Validator(options) {

  // Lấy element của form cần validate
  const formElement = document.querySelector(options.form)

  function getParent(element, selector) {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement;
      }
      element = element.parentElement;
    }
  }

  const selectorRules = {}

  // Hàm thực hiện validate
  function validate(inputElement, rule) {
    const errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector)
    let errorMessage

    // Lấy ra các rules của selector
    const rules = selectorRules[rule.selector]

    // Lặp qua từng rule & kiểm tra
    // Nếu có lỗi thì dừng việc kiểm
    for (let i = 0; i < rules.length; ++i) {
      switch (inputElement.type) {
        case 'radio':
        case 'checkbox':
          errorMessage = rules[i](
            formElement.querySelector(rule.selector + ':checked')
          );
          break;
        default:
          errorMessage = rules[i](inputElement.value);
      }
      if (errorMessage) break;
    }

    if (errorMessage) {
      errorElement.innerText = errorMessage;
      getParent(inputElement, options.formGroupSelector).classList.add('invalid');
    } else {
      errorElement.innerText = '';
      getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
    }

    return !errorMessage;
  }
  if (formElement) {
    // Khi submit form
    formElement.onsubmit = function (e) {
      e.preventDefault();

      let isFormValid = true

      // Lặp qua từng rules và validate
      options.rules.forEach(function (rule) {
        const inputElement = formElement.querySelector(rule.selector)
        const isValid = validate(inputElement, rule)
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        // Trường hợp submit với javascript
        if (typeof options.onSubmit === 'function') {
          const enableInputs = formElement.querySelectorAll('[name]')
          const formValues = Array.from(enableInputs).reduce(function(values, input) {

            switch (input.type) {
              case 'radio':
                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value
                break
              case 'checkbox':
                if (!input.matches(':checked')) {
                  values[input.name] = ''
                  return values
                }
                if (!Array.isArray(values[input.name])) {
                  values[input.name] = []
                }
                values[input.name].push(input.value)
                break
              case 'file':
                values[input.name] = input.files
                break
              default:
                values[input.name] = input.value
            }

            return values
          }, {})
          options.onSubmit(formValues);
        }
        // Trường hợp submit với hành vi mặc định
        else {
          formElement.submit();
        }
      }
    }

    // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
    options.rules.forEach(function (rule) {

      // Lưu lại các rules cho mỗi input
      if (Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test);
      } else {
        selectorRules[rule.selector] = [rule.test];
      }

      let inputElements = formElement.querySelectorAll(rule.selector);

      Array.from(inputElements).forEach(function (inputElement) {
        // Xử lý trường hợp blur khỏi input
        inputElement.onblur = function () {
          validate(inputElement, rule);
        }

        // Xử lý mỗi khi người dùng nhập vào input
        inputElement.oninput = function () {
          const errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
          errorElement.innerText = '';
          getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }
      });
    });
  }

}



// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value ? undefined :  message || 'Vui lòng nhập trường này'
    }
  };
}

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      return regex.test(value) ? undefined :  message || 'Trường này phải là email';
    }
  };
}

Validator.minLength = function (selector, min, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min ? undefined :  message || `Vui lòng nhập tối thiểu ${min} kí tự`;
    }
  };
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function (value) {
      return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác';
    }
  }
}