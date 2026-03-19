import * as React from 'react';
import { IconProps } from './types';

export const MailSquare32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M22.25 1C27.0825 1 31 4.91751 31 9.75V22.25C31 27.0825 27.0825 31 22.25 31H9.75C4.91751 31 1 27.0825 1 22.25V9.75C1 4.91751 4.91751 1 9.75 1H22.25ZM17.5029 17.0361C16.5447 17.4553 15.4543 17.4554 14.4961 17.0361L2.5 11.7871V22.25C2.5 26.2541 5.74594 29.5 9.75 29.5H22.25C26.2541 29.5 29.5 26.2541 29.5 22.25V11.7871L17.5029 17.0361ZM9.75 2.5C5.74594 2.5 2.5 5.74594 2.5 9.75V10.1494L15.0977 15.6621C15.6725 15.9136 16.3265 15.9136 16.9014 15.6621L29.5 10.1494V9.75C29.5 5.74594 26.2541 2.5 22.25 2.5H9.75Z"
        fill={color}
      />
    </svg>
  );
};

MailSquare32.category = 'Communication';

export default MailSquare32;
