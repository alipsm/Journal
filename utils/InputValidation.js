
export const CheckFormat = (type, value, errId) => {
  var CHECK = true;
  // 
  switch (type) {
    case "fullName":
      // let name = /\S+@\S+\.\S+/;
      CHECK = value.length >= 5 ? true : false;
      if (!CHECK) {
        InputError(errId, "بهتر است نام و نام خانوادگی‌تان را کامل وارد کنید.");
      }
      break;
    case "email":
      let email = /\S+@\S+\.\S+/;
      CHECK = email.test(value);
      if (!CHECK) {
        InputError(errId, "فرمت ایمیل اشتباه است.");
      }
      break;
    case "loginPass":
      const checkLoginLenghtPass = new RegExp("(?=.{8,})"); //check lenght pass
      if (!checkLoginLenghtPass.test(value)) {
        CHECK = false;
        InputError(errId, "گذرواژه میبایست 8 کارکتر باشد.");
        // break;
      }
      break;
    case "password":
      CHECK = false;
      var strong_score = 0;
      const checkLenghtPass = new RegExp("(?=.{6,})"); //check lenght pass
      const checkExistNumPass = new RegExp("(?=.*[0-9])"); // check exist num
      const checkLowercaseUppercasePass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])"); // check upper and lower case character
      const checSpecialCharacterPass = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      ); // check exist special character
      if (!checkLenghtPass.test(value)) {
        CHECK = false;
        InputError(errId, "خوب نیست.", "#F35242", true);
        break;
      }

      if (checkExistNumPass.test(value)) {
        strong_score++;
      }
      if (checkLowercaseUppercasePass.test(value)) {
        strong_score++;
      }
      if (checSpecialCharacterPass.test(value)) {
        strong_score++;
      }

      if (strong_score==0){
          InputError(errId, "حداقل امنیت", "#F35242", true);

      } else if (strong_score == 1) {
        CHECK = true;
        InputError(errId, "میتونست بهترهم باشه", "#10CCAE", true);
      } else if (strong_score == 2) {
        CHECK = true;
        InputError(errId, "حالا گذرواژه‌ مطمئن است.", "#10CCAE", true);
      } else if (strong_score == 3) {
        CHECK = true;
        InputError(errId, "به‌به چه رمزی، کارتون خیلی درسته.", "#10CCAE", true);
      }

    case "passwordConfirm":
      CHECK = value.pass1 == value.pass2 ? true : false;
      if (!CHECK) {
        InputError(errId, "گذرواژه‌‌ها یکی نیستند.", true);
      }
      break;
    default:
      break;
  }
  return CHECK;
};


const InputError = (element, text, textErrorColor, timerStop) => {

    var textError = document.querySelector("." + element);
    var insideInput = document.querySelector(`.${element} + input`);

    if (insideInput != null) {
        insideInput.style.borderBottom = `2px solid ${textErrorColor != undefined ? textErrorColor : "#F35242"}`;
    }
    if(textError){
        textError.style.display = "inline-block";
        textError.style.color = textErrorColor && textErrorColor;
        textError.innerHTML = text;
        if (!timerStop) {
            setTimeout(() => {
                if (insideInput != null) {
                    insideInput.style.borderBottom = `1px solid #d3d5e2`;
                }
                textError.style.display = "none";
                textError.innerHTML = "";
            }, 5000)
        }
    }
}