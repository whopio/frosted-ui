import * as React from 'react';
import { IconProps } from './types';

export const LeaveReview24 = ({
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
        d="M10.9714 2H7.97144C4.65773 2 1.97144 4.68629 1.97144 8V16C1.97144 19.3137 4.65773 22 7.97144 22H15.9714C19.2851 22 21.9714 19.3137 21.9714 16V13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0001 4.17157L9.6573 11.5143C9.33618 11.8355 9.1339 12.2563 9.08375 12.7077L8.9181 14.1985C8.86149 14.708 9.29202 15.1386 9.80156 15.082L11.2924 14.9163C11.7437 14.8662 12.1646 14.6639 12.4857 14.3428L19.8285 7M17.0001 4.17157L18.7574 2.41421C19.5385 1.63317 20.8048 1.63316 21.5858 2.41421V2.41421C22.3669 3.19526 22.3669 4.46159 21.5858 5.24264L19.8285 7M17.0001 4.17157L19.8285 7"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default LeaveReview24;
