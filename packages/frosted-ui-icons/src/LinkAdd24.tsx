import * as React from 'react';
import { IconProps } from './types';

export const LinkAdd24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.0717 3.11764C13.1075 2.08188 14.5122 1.5 15.977 1.5C19.0273 1.5 21.5 3.97272 21.5 7.02297C21.5 8.48775 20.9181 9.89254 19.8824 10.9283L17.2491 13.5616C16.9562 13.8545 16.4813 13.8545 16.1884 13.5616C15.8955 13.2687 15.8955 12.7938 16.1884 12.5009L18.8217 9.86764C19.5762 9.11319 20 8.08993 20 7.02297C20 4.80115 18.1989 3 15.977 3C14.9101 3 13.8868 3.42385 13.1324 4.1783L10.4991 6.81158C10.2062 7.10447 9.73131 7.10447 9.43842 6.81158C9.14553 6.51869 9.14553 6.04381 9.43842 5.75092L12.0717 3.11764ZM6.81158 9.43842C7.10447 9.73131 7.10447 10.2062 6.81158 10.4991L4.1783 13.1324C3.42385 13.8868 3 14.9101 3 15.977C3 18.1989 4.80115 20 7.02297 20C8.08993 20 9.11319 19.5762 9.86764 18.8217L12.5009 16.1884C12.7938 15.8955 13.2687 15.8955 13.5616 16.1884C13.8545 16.4813 13.8545 16.9562 13.5616 17.2491L10.9283 19.8824C9.89254 20.9181 8.48775 21.5 7.02297 21.5C3.97272 21.5 1.5 19.0273 1.5 15.977C1.5 14.5122 2.08188 13.1075 3.11764 12.0717L5.75092 9.43842C6.04381 9.14553 6.51869 9.14553 6.81158 9.43842Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M15.2803 7.71967C15.5732 8.01256 15.5732 8.48744 15.2803 8.78033L8.78033 15.2803C8.48744 15.5732 8.01256 15.5732 7.71967 15.2803C7.42678 14.9874 7.42678 14.5126 7.71967 14.2197L14.2197 7.71967C14.5126 7.42678 14.9874 7.42678 15.2803 7.71967Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M17.75 21.25C17.75 21.6642 18.0858 22 18.5 22C18.9142 22 19.25 21.6642 19.25 21.25V19.25H21.25C21.6642 19.25 22 18.9142 22 18.5C22 18.0858 21.6642 17.75 21.25 17.75L19.25 17.75V15.75C19.25 15.3358 18.9142 15 18.5 15C18.0858 15 17.75 15.3358 17.75 15.75V17.75L15.75 17.75C15.3358 17.75 15 18.0858 15 18.5C15 18.9142 15.3358 19.25 15.75 19.25H17.75V21.25Z"
        fill={color}
      />
    </svg>
  );
};

export default LinkAdd24;
