import Vector from "@/components/accountOperation/Vector";
import React from "react";
import AuthInput from "@/components/Input/AuthInput";
import { CheckFormat } from "@/utils/InputValidation";
import Link from "next/link";

export default function register() {

  async function handleRegisterUser(e: React.FormEvent) {
    e.preventDefault();
    const { target } = e;
    //@ts-ignore
    const formData = new FormData(target);
    const { fullName, email, pass, passConfirm } = Object.fromEntries(formData);
    
    if (checkValidate(fullName,email,pass,passConfirm)) {
      console.log("ok")
      try {
        const response = await fetch("/api/auth/register", {
          method: "POST",
          body: JSON.stringify({
            name: fullName,
            email: email,
            password: pass,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(data=>console.log('data', data));
        console.log('response :>> ', response);
      } catch (error) {
        console.log('error', error)
      }
    }
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
      CheckFormat("passwordConfirm", {pass2:passConfirm,pass1:pass}, "PassConfirm_Input")
    ) {
      return true;
    }
    return false;
  };

  return (
    <div className="flex  justify-between items-center w-full bg-dropdown">
      <div className=" absolute left-0 top-0 h-full w-3/5 bg-[#000]">
        <Vector />
      </div>
      {/* login form */}
      <div className="flex flex-col justify-center items-center text-center absolute top-0 right-0 h-full w-2/5 bg-white ">
        <b className=" text-3xl text-dropdown p-2">عضویت</b>
        <p className=" text-base text-dropdown opacity-50">
          حساب کاربری جدیدی ایجاد کنید
        </p>
        <form
          onSubmit={(e) => handleRegisterUser(e)}
          className="grid gap-10 w-3/5 my-12">
          {/* @ts-ignore */}
          <AuthInput
            width={"100%"}
            textLabelInput={"نام"}
            name="fullName"
            errorTextId={"FullName_Input"}
          />
          {/* @ts-ignore */}
          <AuthInput
            width={"100%"}
            textLabelInput={"ایمیل"}
            name="email"
            errorTextId={"Email_Input"}
          />
          {/* @ts-ignore */}
          <AuthInput
            width={"100%"}
            textLabelInput={"گذرواژه"}
            name="pass"
            errorTextId={"Pass_Input"}
          />
          {/* @ts-ignore */}
          <AuthInput
            width={"100%"}
            textLabelInput={"تکرار گذرواژه"}
            name="passConfirm"
            errorTextId={"PassConfirm_Input"}
          />
          <button
            type="submit"
            className=" px-10 py-2 rounded-lg text-white bg-button text-[16px] border border-dotin hover:bg-buttonHover duration-300">
            ثبت نام
          </button>
        </form>
        <div></div>
        <div className="flex items-center center flex-col justify-evenly absolute bottom-0 right-0 w-full h-1/6 bg-gray">
          <span className=" text-dropdown opacity-50 text-base">
            حساب کاربری دارید؟
          </span>
          <Link
            href={"login"}
            className=" px-10 py-2 rounded-lg text-white bg-button text-[16px] border border-dotin hover:bg-buttonHover duration-300">
            ورود
          </Link>
        </div>
      </div>
    </div>
  );
}
