import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRight32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.502 30.9998C5.70278 30.9995 1.0011 26.2981 1.00106 20.4988C1.00125 14.6996 5.70287 9.99804 11.502 9.9978H28.4649L20.7843 2.27905C20.4922 1.98555 20.4929 1.51071 20.7862 1.21851C21.0797 0.926497 21.5546 0.927189 21.8468 1.22046L30.7862 10.2029C31.0771 10.4955 31.0772 10.969 30.7862 11.2615L21.8468 20.2439C21.5546 20.537 21.0797 20.5376 20.7862 20.2458C20.4928 19.9536 20.4921 19.4788 20.7843 19.1853L28.4337 11.4978H11.502C6.5313 11.498 2.50125 15.528 2.50106 20.4988C2.5011 25.4696 6.53121 29.4995 11.502 29.4998H15.42C15.8341 29.4998 16.1698 29.8357 16.17 30.2498C16.1699 30.6639 15.8342 30.9998 15.42 30.9998H11.502Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleRight32.category = 'Arrows';

export default RoundedArrowAngleRight32;
