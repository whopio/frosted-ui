import * as React from 'react';
import { IconProps } from './types';

export const LinkSlash32 = ({
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
        d="M17.1575 5.03185C18.4585 3.73088 20.223 3 22.0628 3C25.8941 3 29 6.10588 29 9.93718C29 11.777 28.2691 13.5415 26.9681 14.8425L23.2491 18.5616C22.9562 18.8545 22.4813 18.8545 22.1884 18.5616C21.8955 18.2687 21.8955 17.7938 22.1884 17.5009L25.9075 13.7819C26.9272 12.7622 27.5 11.3792 27.5 9.93718C27.5 6.93431 25.0657 4.5 22.0628 4.5C20.6208 4.5 19.2378 5.07284 18.2181 6.09251L14.4991 9.81158C14.2062 10.1045 13.7313 10.1045 13.4384 9.81158C13.1455 9.51869 13.1455 9.04381 13.4384 8.75092L17.1575 5.03185ZM9.81158 13.4384C10.1045 13.7313 10.1045 14.2062 9.81158 14.4991L6.09251 18.2181C5.07284 19.2378 4.5 20.6208 4.5 22.0628C4.5 25.0657 6.93431 27.5 9.93718 27.5C11.3792 27.5 12.7622 26.9272 13.7819 25.9075L17.5009 22.1884C17.7938 21.8955 18.2687 21.8955 18.5616 22.1884C18.8545 22.4813 18.8545 22.9562 18.5616 23.2491L14.8425 26.9681C13.5415 28.2691 11.777 29 9.93718 29C6.10588 29 3 25.8941 3 22.0628C3 20.223 3.73088 18.4585 5.03185 17.1575L8.75092 13.4384C9.04381 13.1455 9.51869 13.1455 9.81158 13.4384Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M13.8787 18.1213C14.1716 18.4142 14.1716 18.8891 13.8787 19.182L11.2803 21.7803C10.9874 22.0732 10.5126 22.0732 10.2197 21.7803 9.92678 21.4874 9.92678 21.0126 10.2197 20.7197L12.818 18.1213C13.1109 17.8284 13.5858 17.8284 13.8787 18.1213zM21.7803 10.2197C22.0732 10.5126 22.0732 10.9874 21.7803 11.2803L19.182 13.8787C18.8891 14.1716 18.4142 14.1716 18.1213 13.8787 17.8284 13.5858 17.8284 13.1109 18.1213 12.818L20.7197 10.2197C21.0126 9.92678 21.4874 9.92678 21.7803 10.2197zM5.21967 5.21968C5.51256 4.92679 5.98744 4.92679 6.28033 5.21968L26.7803 25.7197C27.0732 26.0126 27.0732 26.4874 26.7803 26.7803 26.4874 27.0732 26.0126 27.0732 25.7197 26.7803L5.21967 6.28034C4.92678 5.98745 4.92678 5.51258 5.21967 5.21968z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default LinkSlash32;
