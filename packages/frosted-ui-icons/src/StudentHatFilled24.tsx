import * as React from 'react';
import { IconProps } from './types';

export const StudentHatFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <g clipPath="url(#clip0_7089_69)">
        <path
          d="M20.001 16.8877C20.0009 17.8123 19.7304 18.8394 18.9268 19.5596C17.7796 20.5874 15.5479 21.9998 12 22C8.45158 22 6.22088 20.5866 5.07422 19.5586C4.27126 18.8386 4.00008 17.8126 4 16.8887V13.0293L10.7119 16.5918C11.5182 17.0197 12.4838 17.0198 13.29 16.5918L20.001 13.0293V16.8877ZM11.5557 1.58203C11.8424 1.47272 12.1596 1.47262 12.4463 1.58203L12.5869 1.64551L23.3379 7.35254C23.8017 7.59892 24.0195 8.06447 23.9971 8.51953C23.9988 8.54038 24.001 8.56171 24.001 8.58301V15.2217C24.0008 15.6356 23.6649 15.9714 23.251 15.9717C22.8369 15.9717 22.5011 15.6358 22.501 15.2217V10.0039L12.5869 15.2676C12.2206 15.462 11.7814 15.4619 11.415 15.2676L0.664062 9.56055C-0.22117 9.09065 -0.221175 7.82244 0.664062 7.35254L11.415 1.64551L11.5557 1.58203Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_7089_69">
          <path fill={color} d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

StudentHatFilled24.category = 'Objects';

export default StudentHatFilled24;
