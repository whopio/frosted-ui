import * as React from 'react';
import { IconProps } from './types';

export const StatsBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M1 0C1.55228 0 2 0.447715 2 1V9.6875C2 9.85997 2.14007 9.99981 2.3125 10H11C11.5523 10 12 10.4477 12 11C12 11.5523 11.5523 12 11 12H2.3125C1.0355 11.9998 0 10.9645 0 9.6875V1C0 0.447832 0.447876 0.000188784 1 0ZM10 1C10.5523 1 11 1.44772 11 2V6C11 6.55228 10.5523 7 10 7C9.44788 6.99981 9 6.55217 9 6V4.41406L5.70703 7.70703C5.31649 8.09738 4.68343 8.0975 4.29297 7.70703C3.90268 7.31655 3.90268 6.68345 4.29297 6.29297L7.58594 3H6C5.44788 2.99981 5 2.55217 5 2C5 1.44783 5.44788 1.00019 6 1H10Z"
        fill={color}
      />
    </svg>
  );
};

StatsBold12.category = 'Stats & Charts';

export default StatsBold12;
