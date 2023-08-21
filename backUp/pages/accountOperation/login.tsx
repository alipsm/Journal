import React from "react";

import Vector from "@/components/accountOperation/Vector";
import LoginForm from "@/components/AuthForms/LoginForm";

export default function login() {
  return (
    <div className="flex  justify-between items-center w-full bg-dropdown">
      <div className=" absolute left-0 top-0 h-full w-3/5 bg-[#000]">
        <Vector />
      </div>
      <LoginForm/>
    </div>
  );
}
