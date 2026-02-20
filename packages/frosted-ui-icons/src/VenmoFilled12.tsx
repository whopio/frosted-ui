import * as React from 'react';
import { IconProps } from './types';

export const VenmoFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.4611 0.762144C10.4985 0.754828 10.5367 0.771287 10.5565 0.803889C10.9283 1.41746 11.0965 2.05296 11.0965 2.84977C11.0965 5.45291 8.80716 8.8308 6.93589 11.2151C6.91845 11.2373 6.892 11.25 6.86374 11.25H2.70054C2.65574 11.25 2.61743 11.2178 2.60979 11.1736L0.921319 1.42105C0.912146 1.36807 0.950118 1.31853 1.00366 1.31362L4.56826 0.986715C4.61762 0.982189 4.6617 1.01753 4.66803 1.06668L5.5329 7.78989C5.5439 7.87537 5.65498 7.90027 5.70005 7.82682C6.5212 6.48855 7.46225 4.53172 7.46225 3.17498C7.46225 2.45502 7.34495 1.94598 7.15743 1.52719C7.13261 1.47177 7.16481 1.40669 7.2244 1.39504L10.4611 0.762144Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

VenmoFilled12.category = 'Social & Brands';

export default VenmoFilled12;
