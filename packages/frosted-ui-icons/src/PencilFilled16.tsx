import * as React from 'react';
import { IconProps } from './types';

export const PencilFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PencilFilled16"
      {...props}
    >
      <path
        d="M11.958 8.769l-5.686 5.52c-.117.113-.268.185-.43.205l-4 .5c-.229.029-.459-.05-.622-.214-.164-.163-.243-.393-.214-.623l.5-4 .024-.119c.034-.116.097-.223.182-.31L7.23 4.04l4.728 4.728zM11.573 1c.872 0 1.709.346 2.325.963l.139.139c.616.616.963 1.453.963 2.325 0 .889-.36 1.74-.998 2.36l-.968.937-4.759-4.76.939-.966C9.833 1.36 10.684 1 11.574 1z"
        fill={color}
      />
    </svg>
  );
};

PencilFilled16.category = 'Objects';

export default PencilFilled16;
