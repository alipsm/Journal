export const useFormValidation = () => {
  const getValidation = (
    form: FormData
  ): { status: boolean; message: string } => {
    var checkedStatusItems = [];
    const objFormData = Object.fromEntries(form.entries());
    for (const key in objFormData) {
      if (Object.prototype.hasOwnProperty.call(objFormData, key)) {
        checkedStatusItems.push(key);
        const element: string = `${objFormData[key]}`;
        const resultValidation =
          key === "confirmPassword"
            ? validation(key, [element, `${objFormData["password"]}`])
            : validation(key, [element]);
        if (!resultValidation.status) {
          return {
            status: resultValidation.status,
            message: resultValidation.message,
          };
        }
      }
    }
    return {
      status: true,
      message: `Validation was done for: ${checkedStatusItems.join(" , ")}`,
    };
  };

  return { getValidation };
};

export default useFormValidation;

const validation = (
  type: string,
  value: [string, string?]
): { status: boolean; message: string } => {
  var CHECK = true;
  var message = "h";

  switch (type) {
    case "fullName":
      CHECK = value[0]?.length >= 5 ? true : false;
      if (!CHECK) {
        message = "بهتر است نام و نام خانوادگی‌تان را کامل وارد کنید.";
      }
      {
        // TODO : validation of name letters
        // let checkNameFormat=new RegExp(" /\S+@\S+\.\S+/")
        // else if(!checkNameFormat.test(value[0])){
        //   CHECK=false
        //   message = "بهتر است یک نام معتبر وارد کنی";
        // }
      }
      break;
    case "email":
      let email = /\S+@\S+\.\S+/;
      CHECK = email.test(value[0]);
      if (!CHECK) {
        message = "فرمت ایمیل اشتباه است.";
      }
      break;
    case "password":
      CHECK = true;
      const checkLenghtPass = new RegExp("(?=.{6,})"); //check lenght pass
      if (!checkLenghtPass.test(value[0])) {
        CHECK = false;
        message = "گذرواژه میبایست 8 کارکتر باشد.";
      }
      break;

    case "confirmPassword":
      CHECK = value[0] == value[1] ? true : false;
      if (!CHECK) {
        message = "گذرواژه‌‌ها یکی نیستند.";
      }
      break;
    default:
      break;
  }
  return { status: CHECK, message };
};
