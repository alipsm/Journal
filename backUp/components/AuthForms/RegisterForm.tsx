//@ts-ignore
import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef } from "react";
import Link from "next/link";
import { useMutation, useQueryClient } from "react-query";

import useFormValidation from "@/hooks/useFormValidation";
import useUserRegistration from "@/hooks/useRegistration";
import TextInput from "../elements/Input/TextInput";
import AuthButton from "../elements/Button/AuthButton";
import { toast } from "react-toastify";
import Router from "next/router";

export default function RegisterForm() {
  const queryClient = useQueryClient();
  const capRef = useRef(null);

  const { getValidation } = useFormValidation();
  const { register } = useUserRegistration();

  const { mutate: registerUserMutate, isLoading } = useMutation({
    mutationFn: async (form: React.FormEvent) => {
      // @ts-ignore
      const token = capRef.current?.getValue();
      return await register(form, token);
    },
    onSuccess: async (result, variables, context) => {
      await queryClient.setQueryData("userData", result);
      Router.replace("/dashboard");
    },
    onError(error: string, variables, context) {
      toast.error(error);
    },
    onSettled(data, error, variables, context) {
      // toast.error(error);
    },
  });

  // handle submit and check validation
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const { status, message } = getValidation(formData);
    if (status) {
      registerUserMutate(e);
    } else {
      toast.error(message);
    }
  }

  return (
    <div className="flex flex-col justify-between items-center text-center absolute top-0 pt-20 right-0 h-full  bg-white mdl:w-2/5">
      <b className=" text-3xl text-dropdown p-2">عضویت</b>
      <p className=" text-base text-dropdown opacity-50">
        حساب کاربری جدیدی ایجاد کنید
      </p>
      <form onSubmit={handleSubmit} className="grid gap-10 w-3/5 my-12">
        {/* @ts-ignore */}
        <TextInput
          width={"100%"}
          textLabelInput={"نام"}
          name="fullName"
          errorTextId={"FullName_Input"}
        />
        {/* @ts-ignore */}
        <TextInput
          width={"100%"}
          textLabelInput={"ایمیل"}
          name="email"
          errorTextId={"Email_Input"}
        />
        {/* @ts-ignore */}
        <TextInput
          width={"100%"}
          textLabelInput={"گذرواژه"}
          name="password"
          errorTextId={"Pass_Input"}
        />
        {/* @ts-ignore */}

        <TextInput
          width={"100%"}
          textLabelInput={"تکرار گذرواژه"}
          name="confirmPassword"
          errorTextId={"PassConfirm_Input"}
        />
        <ReCAPTCHA
          className={"recaptcha flex justify-center h-20"}
          sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
          name="captcha"
          ref={capRef}
        />
        {/* @ts-ignore */}
        <AuthButton textValue="ثبت نام" type="submit" isLoading={isLoading} />
      </form>
      <div></div>
      <div className="flex items-center center flex-col justify-evenly h-[130px]  bottom-0 right-0 w-full bg-gray">
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
  );
}
