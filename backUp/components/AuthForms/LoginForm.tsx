import useFormValidation from "@/hooks/useFormValidation";
import useUserLogination from "@/hooks/useLogination";
import Link from "next/link";
import  Router  from "next/router";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import AuthButton from "../elements/Button/AuthButton";
import TextInput from "../elements/Input/TextInput";

export default function LoginForm() {

    const queryClient = useQueryClient();
  
    const { getValidation } = useFormValidation();
    const { login } = useUserLogination();
  
    const { mutate: loginUserMutate, isLoading } = useMutation({
      mutationFn: async (form: React.FormEvent) => {
        // @ts-ignore
        return await login(form);
      },
      onSuccess: async (result, variables, context) => {
        debugger
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
        loginUserMutate(e);
      } else {
        toast.error(message);
      }
    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center text-center absolute top-0 right-0 h-full w-2/5 bg-white ">
      <b className=" text-3xl text-dropdown p-2">ورود</b>
      <p className=" text-base text-dropdown opacity-50">
        وارد حساب کاربری خود شوید
      </p>
      <div className="grid gap-10 w-3/5 my-12">
        {/* @ts-ignore */}
        <TextInput width={"100%"} textLabelInput={"ایمیل"} name="email"/>

        {/* @ts-ignore */}
        <TextInput width={"100%"} textLabelInput={"گذرواژه"} name="password"/>
      </div>
      <div>
        {/* @ts-ignore */}
        <AuthButton textValue="ورود" type="submit" isLoading={isLoading} />
      </div>
      <div className="flex items-center center flex-col justify-evenly absolute bottom-0 right-0 w-full h-[130px] bg-gray">
        <span className=" text-dropdown opacity-50 text-base">
          اکانت ندارید؟
        </span>
        <Link
          href={"register"}
          className=" px-10 py-2 rounded-lg text-white bg-button text-[16px] border border-dotin hover:bg-buttonHover duration-300">
          ثبت نام
        </Link>
      </div>
    </form>
  );
}
