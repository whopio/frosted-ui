import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3ZM8.25 7C8.80228 7 9.25 7.44772 9.25 8V10H9.3252C9.87739 10.0001 10.3252 10.4478 10.3252 11C10.3252 11.5522 9.87739 11.9999 9.3252 12H7C6.44772 12 6 11.5523 6 11C6 10.4477 6.44772 10 7 10H7.25V9H7C6.44772 9 6 8.55228 6 8C6 7.44772 6.44772 7 7 7H8.25ZM8 4.00391C8.69032 4.00391 9.24993 4.56361 9.25 5.25391C9.25 5.94426 8.69036 6.50391 8 6.50391C7.30964 6.50391 6.75 5.94426 6.75 5.25391C6.75007 4.56361 7.30968 4.00391 8 4.00391Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleBold16.category = 'Product Icons';

export default InfoCircleBold16;
