import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 10.3059V16.8527C6 17.4863 6.51366 18 7.14729 18H12.8527C13.4863 18 14 17.4863 14 16.8527V10.3059C14 10.137 14.137 10 14.3059 10H16.9787C17.3829 10 17.5897 9.51523 17.3099 9.22346L10.6625 2.29091C10.3012 1.91412 9.69884 1.91412 9.33754 2.29091L2.69015 9.22346C2.41039 9.51523 2.61717 10 3.0214 10H5.69405C5.86302 10 6 10.137 6 10.3059Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatUpBoldFilled20.category = 'Arrows';

export default ArrowFatUpBoldFilled20;
