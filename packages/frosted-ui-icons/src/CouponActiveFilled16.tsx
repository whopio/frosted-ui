import * as React from 'react';
import { IconProps } from './types';

export const CouponActiveFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CouponActiveFilled16"
      {...props}
    >
      <path
        d="M5.294 0c.499 0 .886.285 1.102.629l.08.15.057.112c.3.542.853.89 1.467.89l.122-.006c.604-.045 1.135-.428 1.4-.996l.082-.15C9.819.285 10.206 0 10.705 0h1.045C12.993 0 14 1.007 14 2.25v11.5c0 1.243-1.007 2.25-2.25 2.25h-1.045c-.498 0-.885-.285-1.1-.629l-.194-.354c-.287-.455-.76-.752-1.289-.792L8 14.22c-.655 0-1.24.395-1.523 1-.19.407-.613.78-1.183.78H4.25C3.007 16 2 14.993 2 13.75V2.25C2 1.007 3.007 0 4.25 0h1.044zm5.486 5.22c-.293-.293-.767-.293-1.06 0l-4.5 4.5c-.293.293-.293.767 0 1.06.293.293.767.293 1.06 0l4.5-4.5c.293-.293.293-.767 0-1.06zM10 9c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM6 5c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"
        fill={color}
      />
    </svg>
  );
};

CouponActiveFilled16.category = 'Money & Shopping';

export default CouponActiveFilled16;
