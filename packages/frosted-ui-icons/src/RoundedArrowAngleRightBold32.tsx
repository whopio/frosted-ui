import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.5004 30.9998C5.70141 30.9998 1.00039 26.2987 1.00039 20.4998C1.00052 14.7009 5.70148 9.99976 11.5004 9.99976H27.6127L20.352 2.70483C19.9629 2.31333 19.9646 1.68018 20.3559 1.29077C20.7473 0.901522 21.3804 0.903555 21.7699 1.29468L30.7084 10.2771C31.0966 10.6672 31.0965 11.2971 30.7084 11.6873L21.7699 20.6697C21.3805 21.061 20.7473 21.0628 20.3559 20.6736C19.9647 20.284 19.9625 19.6499 20.352 19.2585L27.5756 11.9998H11.5004C6.80605 11.9998 3.00052 15.8054 3.00039 20.4998C3.00039 25.1942 6.80597 28.9998 11.5004 28.9998H15.4154C15.9675 28.9999 16.4153 29.4477 16.4154 29.9998C16.4154 30.5519 15.9676 30.9996 15.4154 30.9998H11.5004Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleRightBold32.category = 'Arrows';

export default RoundedArrowAngleRightBold32;
