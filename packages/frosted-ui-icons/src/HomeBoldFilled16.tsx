import * as React from 'react';
import { IconProps } from './types';

export const HomeBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.36426 2.05986C6.85531 0.693061 9.14469 0.693059 10.6357 2.05986L13.9033 5.05498C14.6018 5.69535 15 6.6005 15 7.54814V12.2142C14.9998 13.7525 13.7523 15.0003 12.2139 15.0003H11.2998C10.5821 15.0002 10.0002 14.4182 10 13.7005V10.0003C9.99999 8.89573 9.10456 8.00029 8 8.00029C6.89544 8.00029 6.00001 8.89573 6 10.0003V13.7005C5.99975 14.4182 5.41792 15.0002 4.7002 15.0003H3.78613C2.24772 15.0003 1.00016 13.7525 1 12.2142V7.54814C1 6.6005 1.39817 5.69535 2.09668 5.05498L5.36426 2.05986Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

HomeBoldFilled16.category = 'Buildings';

export default HomeBoldFilled16;
