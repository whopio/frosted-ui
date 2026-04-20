import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDownBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M6 9.69405V3.14729C6 2.51366 6.51366 2 7.14729 2H12.8527C13.4863 2 14 2.51366 14 3.14729V9.69405C14 9.86302 14.137 10 14.3059 10H16.9787C17.3829 10 17.5897 10.4848 17.3099 10.7765L10.6625 17.7091C10.3012 18.0859 9.69884 18.0859 9.33754 17.7091L2.69015 10.7765C2.41039 10.4848 2.61717 10 3.0214 10H5.69405C5.86302 10 6 9.86302 6 9.69405Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatDownBold20.category = 'Arrows';

export default ArrowFatDownBold20;
