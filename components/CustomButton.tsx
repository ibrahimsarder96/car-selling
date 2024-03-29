
"use client"

import { CustomButtonProps } from "@/types";

const CustomButton = ({title, containerStyle, handleClick, btnType}: CustomButtonProps) => {
  return (
    <div>
      <button
      disabled={false}
      type={btnType || `button`}
      className={`custom-btn ${containerStyle}`}
      onClick={() => handleClick}
      >
        <span className={`flex-1`}>
          {title}
        </span>
      </button>
    </div>
  );
};

export default CustomButton;