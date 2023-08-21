import React from "react";
import {CircularProgress} from 'react-cssfx-loading'

export default function AuthButton({
  style,
  onButtonClicked,
  disabled=false,
  classes="btn-style",
  textValue="",
  type="button",
  isLoading=false
}) {
  return (
    <button
      variant="contained"
      className={`flex justify-center items-center px-10 py-2 rounded-lg text-white bg-button text-[16px] border border-dotin hover:bg-buttonHover duration-300`}
      disabled={isLoading|disabled?true:false}
      style={style}
      type={"submit"}
      onClick={()=>onButtonClicked?onButtonClicked():""}
    >
      {isLoading?<CircularProgress className=" absolute w-full" color="white" width="36px" height="36px" duration="3s" />:null}
      {<span className={` flex items-center ${isLoading&&"opacity-0"} `}>{ textValue}</span>}
    </button>
  );
}
