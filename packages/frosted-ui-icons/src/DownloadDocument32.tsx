import * as React from 'react';
import { IconProps } from './types';

export const DownloadDocument32 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
        d="M7.08325 6.33329C7.08325 5.27475 7.94137 4.41663 8.99992 4.41663H15.8954C16.0152 4.41663 16.1338 4.42784 16.2499 4.4497V9.66663C16.2499 11.5536 17.7796 13.0833 19.6666 13.0833H24.8835C24.9054 13.1994 24.9166 13.318 24.9166 13.4378V25.6666C24.9166 26.7252 24.0585 27.5833 22.9999 27.5833H8.99992C7.94137 27.5833 7.08325 26.7252 7.08325 25.6666V6.33329ZM23.8559 11.5833L17.7499 5.47727V9.66663C17.7499 10.7252 18.608 11.5833 19.6666 11.5833H23.8559ZM8.99992 2.91663C7.11295 2.91663 5.58325 4.44632 5.58325 6.33329V25.6666C5.58325 27.5536 7.11295 29.0833 8.99992 29.0833H22.9999C24.8869 29.0833 26.4166 27.5536 26.4166 25.6666V13.4378C26.4166 12.5317 26.0566 11.6627 25.4158 11.0219L25.4158 11.0219L18.3113 3.91735L18.3113 3.91733C17.6705 3.2766 16.8015 2.91663 15.8954 2.91663H8.99992ZM17.0624 15.5C17.0624 15.0858 16.7266 14.75 16.3124 14.75C15.8982 14.75 15.5624 15.0858 15.5624 15.5V21.5018L14.5303 20.4696C14.2374 20.1767 13.7625 20.1767 13.4696 20.4696C13.1767 20.7625 13.1767 21.2374 13.4696 21.5303L15.3587 23.4194C15.8469 23.9075 16.6383 23.9075 17.1265 23.4194L19.1871 21.3587C19.48 21.0658 19.48 20.591 19.1871 20.2981C18.8942 20.0052 18.4194 20.0052 18.1265 20.2981L17.0624 21.3621V15.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default DownloadDocument32;
