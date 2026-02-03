import * as React from 'react';
import { IconProps } from './types';

export const XDotCom20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M14.5028 2.91675H16.9043L11.6575 8.91758L17.83 17.0834H12.997L9.21167 12.1309L4.88031 17.0834H2.47724L8.08924 10.6648L2.16797 2.91675H7.12366L10.5453 7.44354L14.5028 2.91675ZM13.6598 15.6449H14.9906L6.40056 4.27966H4.97252L13.6598 15.6449Z"
        fill={color}
      />
    </svg>
  );
};

XDotCom20.category = 'Social & Brands';

export default XDotCom20;
