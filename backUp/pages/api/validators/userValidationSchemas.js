const { body, header } = require("express-validator");

const registerSchema = [
  body("fullName")
    .notEmpty()
    .withMessage("ٔنام خالی است!")
    .isLength({ min: 6, max: 40 })
    .withMessage("نام میبایست بیشتر از ۶ حرف باشد"),
  body("password")
    .notEmpty()
    .withMessage("فیلد پسورد خالی است")
    .isLength({ min: 6, max: 500 })
    .withMessage("پسورد باید حداقل شامل ۶ حرف باشد"),
  body("email")
    .notEmpty()
    .withMessage("فیلد ایمیل خالی است")
    .isEmail()
    .withMessage("فرمت ایمیل نادرست است"),
  header("authorization").notEmpty().withMessage("لطفا ReCaptcha را کامل کنید"),
];

const loginSchema = [
  body("password")
    .notEmpty()
    .withMessage("فیلد پسورد خالی است")
    .isLength({ min: 6, max: 500 })
    .withMessage("پسورد باید حداقل شامل ۶ حرف باشد"),
  body("email")
    .notEmpty()
    .withMessage("فیلد ایمیل خالی است")
    .isEmail()
    .withMessage("فرمت ایمیل نادرست است")
];

module.exports = {
  registerSchema,
  loginSchema,
};

// const registerSchema = [
//     body("fullName")
//       .notEmpty()
//       .withMessage("ٔName is Empty value!")
//       .isLength({ min: 6, max: 40 })
//       .withMessage("Name length is out of range"),
//     body("password")
//       .notEmpty()
//       .withMessage("Password is Empty value!")
//       .isLength({ min: 6, max: 500 })
//       .withMessage("Illegal password length (6 characters)"),
//     body("email")
//       .notEmpty()
//       .withMessage("Email is Empty value!")
//       .isEmail()
//       .withMessage("Incorrect format for email"),
//       body("token")
//       .notEmpty()
//       .withMessage("Token is Empty value!")
//   ];
