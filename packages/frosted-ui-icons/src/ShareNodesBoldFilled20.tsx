import * as React from 'react';
import { IconProps } from './types';

export const ShareNodesBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShareNodesBoldFilled20"
      {...props}
    >
      <path
        d="M15.25 1C17.3211 1 19 2.67893 19 4.75C19 6.82107 17.3211 8.5 15.25 8.5C14.2903 8.5 13.4152 8.13892 12.752 7.5459L8.48535 9.67969C8.49429 9.7853 8.5 9.89207 8.5 10C8.5 10.1059 8.49397 10.2107 8.48535 10.3145L12.7568 12.4492C13.4195 11.8589 14.2927 11.5 15.25 11.5C17.3211 11.5 19 13.1789 19 15.25C19 17.3211 17.3211 19 15.25 19C13.1789 19 11.5 17.3211 11.5 15.25C11.5 15.2252 11.5005 15.2005 11.501 15.1758L7.05762 12.9541C6.42114 13.452 5.62072 13.75 4.75 13.75C2.67893 13.75 1 12.0711 1 10C1 7.92893 2.67893 6.25 4.75 6.25C5.61853 6.25 6.41801 6.54538 7.05371 7.04102L11.501 4.81738C11.5006 4.79497 11.5 4.77251 11.5 4.75C11.5 2.67893 13.1789 1 15.25 1Z"
        fill={color}
      />
    </svg>
  );
};

ShareNodesBoldFilled20.category = 'Interface General';

export default ShareNodesBoldFilled20;
