import * as React from 'react';
import { IconProps } from './types';

export const ChevronLeftToLineInBoxFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M17.5 0C21.0899 0 24 2.91015 24 6.5V17.5C24 21.0899 21.0899 24 17.5 24H6.5C2.91015 24 0 21.0899 0 17.5V6.5C2.57711e-07 2.91015 2.91015 2.57702e-07 6.5 0H17.5ZM7.75 6.5C7.33579 6.5 7 6.83579 7 7.25V16.75C7.00003 17.1642 7.33581 17.5 7.75 17.5C8.16419 17.5 8.49997 17.1642 8.5 16.75V7.25C8.5 6.83579 8.16421 6.5 7.75 6.5ZM17.2803 6.71973C16.9874 6.42684 16.5126 6.42684 16.2197 6.71973L11.4697 11.4697C11.3291 11.6104 11.25 11.8011 11.25 12C11.25 12.1989 11.3291 12.3896 11.4697 12.5303L16.2197 17.2803C16.5126 17.5731 16.9874 17.5731 17.2803 17.2803C17.5732 16.9874 17.5731 16.5126 17.2803 16.2197L13.0605 12L17.2803 7.78027C17.5732 7.48738 17.5732 7.01262 17.2803 6.71973Z"
        fill={color}
      />
    </svg>
  );
};

ChevronLeftToLineInBoxFilled24.category = 'Interface General';

export default ChevronLeftToLineInBoxFilled24;
