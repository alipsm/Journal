import React from "react";

import Vector from "@/components/accountOperation/Vector";
import RegisterForm from "@/components/AuthForms/RegisterForm";

export default function Register() {

  return (
    <div className="flex  justify-between items-center w-full bg-dropdown">
      <div className=" absolute left-0 top-0 h-full w-4/5 bg-[#000] mdl:w-3/5">
        <Vector />
      </div>
      <RegisterForm/>
    </div>
  );
}
