import * as React from 'react';
import { IconProps } from './types';

export const InfoCircleBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 0.5C15.2467 0.5 19.5 4.75329 19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5ZM10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5ZM10.249 8C10.8013 8 11.249 8.44772 11.249 9V13H12C12.5523 13 13 13.4477 13 14C13 14.5523 12.5523 15 12 15H8C7.44772 15 7 14.5523 7 14C7 13.4477 7.44772 13 8 13H9.24902V10H8C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8H10.249ZM10 4.5C10.6904 4.5 11.25 5.05964 11.25 5.75C11.25 6.44036 10.6904 7 10 7C9.30964 7 8.75 6.44036 8.75 5.75C8.75 5.05964 9.30964 4.5 10 4.5Z"
        fill={color}
      />
    </svg>
  );
};

InfoCircleBold20.category = 'Interface General';

export default InfoCircleBold20;
