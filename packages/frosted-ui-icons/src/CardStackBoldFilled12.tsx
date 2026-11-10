import * as React from 'react';
import { IconProps } from './types';

export const CardStackBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CardStackBoldFilled12"
      {...props}
    >
      <path
        d="M9.5 5c1.58 0 2.764 1.449 2.45 2.997l-.407 2c-.237 1.164-1.261 2.001-2.45 2.001H2.91c-1.189 0-2.213-.837-2.45-2.002L.054 7.997C-.261 6.448.924 5 2.504 5h6.995zm-.42-2.498c1.12 0 2.019.861 2.114 1.933C10.696 4.16 10.12 4 9.5 4H2.505c-.619 0-1.194.158-1.693.434.096-1.072.996-1.932 2.115-1.932H9.08zM7.775.002c.999 0 1.818.686 2.054 1.59-.24-.058-.49-.09-.75-.09H2.927c-.259 0-.509.032-.747.09C2.415.689 3.235.004 4.234.003h3.54z"
        fill={color}
      />
    </svg>
  );
};

CardStackBoldFilled12.category = 'Interface General';

export default CardStackBoldFilled12;
