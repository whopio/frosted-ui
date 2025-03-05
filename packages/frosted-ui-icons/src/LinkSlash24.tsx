import * as React from 'react';
import { IconProps } from './types';

export const LinkSlash24 = ({
  color = 'currentColor',
  ...props
}: IconProps) => {
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
      <path
        d="M12.5717 3.61764C13.6075 2.58188 15.0122 2 16.477 2C19.5273 2 22 4.47272 22 7.52297C22 8.98775 21.4181 10.3925 20.3824 11.4283L17.8499 13.9608C17.557 14.2537 17.0821 14.2537 16.7892 13.9608C16.4963 13.6679 16.4963 13.193 16.7892 12.9001L19.3217 10.3676C20.0762 9.61319 20.5 8.58993 20.5 7.52297C20.5 5.30115 18.6989 3.5 16.477 3.5C15.4101 3.5 14.3868 3.92385 13.6324 4.6783L11.0999 7.21079C10.807 7.50368 10.3321 7.50368 10.0392 7.21079C9.74632 6.91789 9.74632 6.44302 10.0392 6.15013L12.5717 3.61764ZM7.21079 10.0392C7.50368 10.3321 7.50368 10.807 7.21079 11.0999L4.6783 13.6324C3.92385 14.3868 3.5 15.4101 3.5 16.477C3.5 18.6989 5.30115 20.5 7.52297 20.5C8.58993 20.5 9.61319 20.0762 10.3676 19.3217L12.9001 16.7892C13.193 16.4963 13.6679 16.4963 13.9608 16.7892C14.2537 17.0821 14.2537 17.557 13.9608 17.8499L11.4283 20.3824C10.3925 21.4181 8.98775 22 7.52297 22C4.47272 22 2 19.5273 2 16.477C2 15.0122 2.58188 13.6075 3.61764 12.5717L6.15013 10.0392C6.44302 9.74632 6.91789 9.74632 7.21079 10.0392Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M10.409 13.591C10.7019 13.8839 10.7019 14.3588 10.409 14.6517L9.28033 15.7803C8.98744 16.0732 8.51256 16.0732 8.21967 15.7803 7.92678 15.4875 7.92678 15.0126 8.21967 14.7197L9.34835 13.591C9.64125 13.2981 10.1161 13.2981 10.409 13.591zM15.7803 8.21967C16.0732 8.51256 16.0732 8.98744 15.7803 9.28033L14.6517 10.409C14.3588 10.7019 13.8839 10.7019 13.591 10.409 13.2981 10.1161 13.2981 9.64124 13.591 9.34835L14.7197 8.21967C15.0126 7.92678 15.4875 7.92678 15.7803 8.21967zM3.21967 3.21967C3.51256 2.92678 3.98744 2.92678 4.28033 3.21967L20.7803 19.7197C21.0732 20.0126 21.0732 20.4874 20.7803 20.7803 20.4874 21.0732 20.0126 21.0732 19.7197 20.7803L3.21967 4.28033C2.92678 3.98744 2.92678 3.51256 3.21967 3.21967z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default LinkSlash24;
