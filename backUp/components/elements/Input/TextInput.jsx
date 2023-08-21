import React from "react";

export default function TextInput({
  textLabelInput, //place holder text (moved to top)
  width, // set input width
  typeInput, //set input type
  name,
  disable, //handle disable input (true/false)
  chechvalue, //
  maxlength,
  classes,
  direction,
  wrapperClass,
  value,
  ref,
  inputId,
  placeholder,
  getInputValue,
  errorTextId
}) {



  return (
    <>
      <div className={`auth-input input-wrapper ${wrapperClass}`}>
        <span className={`error_down_input hidden absolute right-1 top-11 text-xs text-[#c42b1c] ${errorTextId != undefined ? errorTextId:"hidden"}`}>اطلاعات نامعتبر</span>
        <input
          placeholder={placeholder}
          id={inputId != undefined ? inputId : ""}
          type={typeInput}
          required
          maxLength={maxlength}
          name={name}
          
          ref={ref!=undefined?ref:null}
          disabled={disable}
          className={`${classes}  ${
            disable == true && " bg-[#D9D9D9] text-[#FCFCFB]"
          }`}
          value={value}
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
          // onChange={e=>getInputValue(e.target.value)}
        />

        <label className={disable ? "text-[#fff]" : ""}>{textLabelInput}</label>

        {/* TODO: CHANGE INFO TEXT WITH STIKY NOTE IN OFFICE */}
        {/* {infoStrongPass == true ? <span className={` info w-[200%] `}>با ترکیب علائم (!@#) و اعداد (1-9) و حروف انگلیسی (A-z) گذرواژه طولانی و مطمئن بسازید.</span> : null} */}
      </div>
    </>
  );
}
