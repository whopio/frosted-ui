import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleLeftBold32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20.4996 30.9998C26.2986 30.9998 30.9996 26.2987 30.9996 20.4998C30.9995 14.7009 26.2985 9.99976 20.4996 9.99976H4.3873L11.648 2.70483C12.037 2.31334 12.0353 1.68017 11.6441 1.29077C11.2528 0.901537 10.6196 0.903601 10.2301 1.29468L1.2916 10.2771C0.903434 10.6672 0.90347 11.2971 1.2916 11.6873L10.2301 20.6697C10.6195 21.061 11.2527 21.0628 11.6441 20.6736C12.0353 20.284 12.0374 19.6499 11.648 19.2585L4.42441 11.9998H20.4996C25.1939 11.9998 28.9995 15.8054 28.9996 20.4998C28.9996 25.1942 25.194 28.9998 20.4996 28.9998H16.5846C16.0325 28.9999 15.5847 29.4477 15.5846 29.9998C15.5846 30.552 16.0324 30.9996 16.5846 30.9998H20.4996Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleLeftBold32.category = 'Arrows';

export default RoundedArrowAngleLeftBold32;
