import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.5 3.5C15.2 3.5 17.4435 5.446 17.9092 8.01172L20.0684 6.04199C21.1916 5.01685 22.9977 5.81334 22.998 7.33398V16.6758C22.9974 18.1961 21.1915 18.9925 20.0684 17.9678L17.9082 15.9951C17.4398 18.5575 15.1977 20.5 12.5 20.5H6.5C3.46243 20.5 1 18.0376 1 15V9C1 5.96243 3.46243 3.5 6.5 3.5H12.5Z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnFilled24.category = 'Product Icons';

export default WebcamOnFilled24;
