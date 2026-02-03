import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkCircleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM17.2803 8.46973C16.9874 8.17683 16.5126 8.17683 16.2197 8.46973L10.1201 14.5693L7.78027 12.2295C7.4874 11.9367 7.01261 11.9367 6.71973 12.2295C6.42684 12.5224 6.42689 12.9971 6.71973 13.29L9.58984 16.1602C9.73049 16.3008 9.92121 16.3799 10.1201 16.3799C10.319 16.3799 10.5098 16.3008 10.6504 16.1602L17.2803 9.53027C17.5732 9.23738 17.5732 8.76262 17.2803 8.46973Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkCircleFilled24.category = 'Checkmarks';

export default CheckmarkCircleFilled24;
