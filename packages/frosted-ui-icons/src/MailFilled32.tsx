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
        d="M14.5771 17.1025C15.4882 17.4757 16.5099 17.4759 17.4209 17.1025L31.9951 11.1309V21.75C31.9951 25.754 28.7491 28.9999 24.7451 29H7.25C3.24611 28.9998 0 25.7539 0 21.75V11.1289L14.5771 17.1025ZM24.7451 3C28.5039 3.0001 31.5945 5.8606 31.959 9.52344L16.8516 15.7148C16.3051 15.9387 15.692 15.9387 15.1455 15.7148L0.0351562 9.52246C0.400071 5.8601 3.49164 3.0002 7.25 3H24.7451Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MailFilled32.category = 'Communication';

export default MailFilled32;
