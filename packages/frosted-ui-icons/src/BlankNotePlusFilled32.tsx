import * as React from 'react';
import { IconProps } from './types';

export const BlankNotePlusFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M22.75 1C27.3063 1 31 4.69365 31 9.25V22.75C31 22.9544 30.9892 23.1568 30.9746 23.3574C30.7452 23.288 30.5021 23.25 30.25 23.25H28.25V21.25C28.25 19.8693 27.1307 18.75 25.75 18.75C24.3693 18.75 23.25 19.8693 23.25 21.25V23.25H21.25C19.8693 23.25 18.75 24.3693 18.75 25.75C18.75 27.1307 19.8693 28.25 21.25 28.25H23.25V30.25C23.25 30.5021 23.288 30.7452 23.3574 30.9746C23.1568 30.9892 22.9544 31 22.75 31H9.25C4.69365 31 1 27.3063 1 22.75V9.25C1 4.69365 4.69365 1 9.25 1H22.75ZM28.8975 28.25C28.6938 28.4774 28.4774 28.6929 28.25 28.8965V28.25H28.8975Z"
        fill={color}
      />
      <path
        d="M25.75 21.25V25.75M25.75 30.25V25.75M25.75 25.75H21.25M25.75 25.75H30.25"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

BlankNotePlusFilled32.category = 'Interface General';

export default BlankNotePlusFilled32;
