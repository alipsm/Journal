import toast from 'react-hot-toast';
import { CheckFormat } from "@/utils/InputValidation";
import axios from "axios";
import { toastOptions } from '@/constants/toastOption';

export default async function handleRegisterUser(
  e: React.FormEvent | any,
  token: string
): Promise<boolean> {
  e.preventDefault();
  const { target } = e;
  const formData = new FormData(target);
  const { fullName, email, pass, passConfirm } = Object.fromEntries(formData);

  // @ts-ignore
  // const token = capRef.current?.getValue();

  try {
  } catch (error) {}
  const config = { headers: { "Content-Type": "application/json" } };

  if (checkValidate(fullName, email, pass, passConfirm)) {
  }
  try {
    // check varify captcha token
    if (!token) throw new Error("لطفا captcha را کامل کنید.");

    const response = await axios
      .post(
        "/api/user/register",
        {
          fullName: fullName,
          email: email,
          password: pass,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((data) => {
        console.log('data', data.data)
        return Promise.resolve(true);
      });
    console.log("response :>> ", response);
  
  } catch (error: any) {
    if (error instanceof Error) {
      toast.error(error.message,toastOptions)
    }
    
    // if (error.response) {
    //   console.log("error1", error.response);
    // } else if (error.request) {
    //   console.log("error2", error.request);
    // } else if (error.message) {
    //   console.log("error3", error.message);
    // }
    
    return Promise.resolve(false)
  }
  return Promise.resolve(false);
}

const checkValidate = (
  fullName: any,
  email: any,
  pass: any,
  passConfirm: any
) => {
  if (
    CheckFormat("fullName", fullName, "FullName_Input") &&
    CheckFormat("email", fullName, "Email_Input") &&
    CheckFormat("password", pass, "Pass_Input") &&
    CheckFormat(
      "passwordConfirm",
      { pass2: passConfirm, pass1: pass },
      "PassConfirm_Input"
    )
  ) {
    return true;
  }
  return false;
};
