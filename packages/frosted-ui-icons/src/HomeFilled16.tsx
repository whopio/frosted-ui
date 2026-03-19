import * as React from 'react';
import { IconProps } from './types';

export const HomeFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M1.75 7.41979C1.75 6.74351 2.03759 6.09913 2.54098 5.64752L6.06341 2.4874C7.16525 1.49889 8.83474 1.49889 9.93659 2.4874L13.459 5.64752C13.9624 6.09913 14.25 6.74351 14.25 7.41979V12.4643C14.25 13.4505 13.4505 14.25 12.4643 14.25H11.25C10.9739 14.25 10.75 14.0261 10.75 13.75V10C10.75 8.48122 9.51878 7.25 8 7.25C6.48122 7.25 5.25 8.48122 5.25 10V13.75C5.25 14.0261 5.02614 14.25 4.75 14.25H3.53571C2.54949 14.25 1.75 13.4505 1.75 12.4643V7.41979Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

HomeFilled16.category = 'Buildings';

export default HomeFilled16;
