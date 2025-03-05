import * as React from 'react';
import { IconProps } from './types';

export const Split16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.2455 15.805C12.552 16.0836 13.0263 16.061 13.305 15.7545L15.805 13.0045C16.065 12.7184 16.065 12.2816 15.805 11.9955L13.305 9.24549C13.0263 8.939 12.552 8.91641 12.2455 9.19505C11.939 9.47367 11.9164 9.94801 12.195 10.2545L13.5546 11.75H11.4386C10.9774 11.75 10.5524 11.4999 10.3284 11.0968L8.60797 8L10.3284 4.90323C10.5524 4.50005 10.9774 4.25 11.4386 4.25H13.5546L12.195 5.7455C11.9164 6.05199 11.939 6.52633 12.2455 6.80496C12.552 7.08358 13.0263 7.061 13.305 6.7545L15.805 4.0045C16.065 3.71844 16.065 3.28156 15.805 2.9955L13.305 0.245496C13.0263 -0.060998 12.552 -0.0835848 12.2455 0.195045C11.939 0.473675 11.9164 0.948011 12.195 1.2545L13.5546 2.75H11.4386C10.4326 2.75 9.5057 3.29539 9.01716 4.17477L7.3087 7.25H5.90549C5.57245 5.95608 4.39788 5 3 5C1.34315 5 0 6.34315 0 8C0 9.65685 1.34315 11 3 11C4.39788 11 5.57245 10.0439 5.90549 8.75H7.3087L9.01716 11.8252C9.5057 12.7046 10.4326 13.25 11.4386 13.25H13.5546L12.195 14.7455C11.9164 15.052 11.939 15.5263 12.2455 15.805ZM4.5 8C4.5 7.17157 3.82843 6.5 3 6.5C2.17157 6.5 1.5 7.17157 1.5 8C1.5 8.82843 2.17157 9.5 3 9.5C3.82843 9.5 4.5 8.82843 4.5 8Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Split16;
