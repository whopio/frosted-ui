import * as React from 'react';
import { IconProps } from './types';

export const Megaphone24 = ({
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
        d="M19 3.5C19 2.94772 19.4477 2.5 20 2.5C20.5523 2.5 21 2.94772 21 3.5V20.5C21 21.0523 20.5523 21.5 20 21.5C19.4477 21.5 19 21.0523 19 20.5V19.7675C19.0003 19.7559 19.0003 19.7443 19 19.7327V4.26725C19.0003 4.25569 19.0003 4.24409 19 4.23248V3.5ZM17.5 3.73267V3.5C17.5 2.11929 18.6193 1 20 1C21.3807 1 22.5 2.11929 22.5 3.5V20.5C22.5 21.8807 21.3807 23 20 23C18.6193 23 17.5 21.8807 17.5 20.5V20.2673L13.5 18.7473V20.5C13.5 21.8807 12.3807 23 11 23C9.61929 23 8.5 21.8807 8.5 20.5V16.8473L6.43632 16.0631C6.18091 17.1726 5.18707 18 4 18C2.61929 18 1.5 16.8807 1.5 15.5V8.5C1.5 7.11929 2.61929 6 4 6C5.18706 6 6.18089 6.82734 6.43632 7.93685L17.5 3.73267ZM17.5 5.33732L6.5 9.5173V14.4827L17.5 18.6626V5.33732ZM5 9.01748C4.99973 9.00587 4.99973 8.99429 5 8.98273V8.5C5 7.94772 4.55228 7.5 4 7.5C3.44772 7.5 3 7.94772 3 8.5V15.5C3 16.0523 3.44772 16.5 4 16.5C4.55228 16.5 5 16.0523 5 15.5V15.0172C4.99973 15.0057 4.99973 14.9941 5 14.9825V9.01748ZM10 17.4173L12 18.1773V20.5C12 21.0523 11.5523 21.5 11 21.5C10.4477 21.5 10 21.0523 10 20.5V17.4173Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Megaphone24;
