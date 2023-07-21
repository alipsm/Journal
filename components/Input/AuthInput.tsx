import React from "react";

export default function AuthInput({
  textLabelInput = "" as string, //place holder text (moved to top)
  width = "" as string, // set input width
  typeInput = "" as string, //set input type
  disable = false as boolean, //handle disable input (true/false)
  chechvalue = "" as string, //
  maxlength = undefined as number | undefined,
  classes = "" as string,
  direction = "" as string,
  wrapperClass = "" as string,
  value = "" as string,
  ref = "" as string,
  inputId = "" as string,
  placeholder = "" as string,
}) {
  return (
    <>
      <div className={`auth-input input-wrapper ${wrapperClass}`}>
        {/* <span className={`error_down_input ${errorTextId != undefined && errorTextId}`}>اطلاعات نامعتبر</span> */}
        <input
          placeholder={placeholder}
          id={inputId != undefined ? inputId : ""}
          type={typeInput}
          required
          maxLength={maxlength}
          name={typeInput}
          // ref={ref}
          disabled={disable}
          className={`${classes}  ${
            disable == true && " bg-[#D9D9D9] text-[#FCFCFB]"
          }`}
          // value={value}
          dir="auto"
          style={{
            // direction,
            width: `${width}`,
            //@ts-ignore
            pointerEvents: disable && "none",
            borderBottom: disable
              ? " 3px solid rgba(16, 204, 174, 1) !important"
              : chechvalue
              ? " 3px solid #cd0a0a"
              : "",
          }}
        />

        <label className={disable ? "text-[#fff]" : ""}>{textLabelInput}</label>

        {/* TODO: CHANGE INFO TEXT WITH STIKY NOTE IN OFFICE */}
        {/* {infoStrongPass == true ? <span className={` info w-[200%] `}>با ترکیب علائم (!@#) و اعداد (1-9) و حروف انگلیسی (A-z) گذرواژه طولانی و مطمئن بسازید.</span> : null} */}
      </div>
    </>
  );
}
