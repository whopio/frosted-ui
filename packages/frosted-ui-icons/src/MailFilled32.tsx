import * as React from 'react';
import { IconProps } from './types';

export const MailFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M31 21.75C31 25.7541 27.7541 29 23.75 29H8.25C4.24594 29 1 25.7541 1 21.75V11.1162L14.4941 17.0332C15.4539 17.454 16.5461 17.454 17.5059 17.0332L31 11.1162V21.75ZM23.75 3C27.4995 3 30.5838 5.84632 30.9609 9.49609L16.9033 15.6602C16.3276 15.9125 15.6724 15.9125 15.0967 15.6602L1.03809 9.49609C1.41515 5.84627 4.50049 3 8.25 3H23.75Z"
        fill={color}
      />
    </svg>
  );
};

MailFilled32.category = 'Communication';

export default MailFilled32;
