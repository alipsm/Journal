import Vector from "@/components/accountOperation/Vector";
import React from "react";
import AuthInput from "@/components/Input/AuthInput";
import { motion } from "framer-motion";

export default function login() {
  return (
    <div className="flex  justify-between items-center w-full bg-dropdown">
      <div className=" absolute left-0 top-0 h-full w-3/5 bg-[#000]">
        <Vector />
      </div>

      {/* login form */}
      <form className="flex flex-col justify-center items-center text-center absolute top-0 right-0 h-full w-2/5 bg-white ">
        <b className=" text-3xl text-dropdown p-2">ورود</b>
        <p className=" text-base text-dropdown opacity-50">
          وارد حساب کاربری خود شوید
        </p>
        <div className="grid gap-10 w-3/5 my-12">
          <AuthInput width={"100%"} textLabelInput={"ایمیل"} />

          <AuthInput width={"100%"} textLabelInput={"گذرواژه"} />
        </div>
        <div>
          <button className=" px-10 py-2 rounded-lg text-white bg-button text-[16px] border border-dotin hover:bg-buttonHover duration-300">
            ورود
          </button>
        </div>
        <div className="flex items-center center flex-col justify-evenly absolute bottom-0 right-0 w-full h-1/6 bg-gray">
          <span className=" text-dropdown opacity-50 text-base">اکانت ندارید؟</span>
          <button className=" px-10 py-2 rounded-lg text-white bg-button text-[16px] border border-dotin hover:bg-buttonHover duration-300">
            ثبت نام
          </button>
        </div>
      </form>
    </div>
  );
}
