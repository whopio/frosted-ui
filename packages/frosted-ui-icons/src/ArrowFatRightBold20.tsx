import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.69405 6L3.14729 6C2.51366 6 2 6.51366 2 7.14729L2 12.8527C2 13.4863 2.51366 14 3.14729 14H9.69405C9.86302 14 10 14.137 10 14.3059L10 16.9787C10 17.3829 10.4848 17.5897 10.7765 17.3099L17.7091 10.6625C18.0859 10.3012 18.0859 9.69884 17.7091 9.33754L10.7765 2.69015C10.4848 2.41039 10 2.61717 10 3.0214V5.69405C10 5.86302 9.86302 6 9.69405 6Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatRightBold20.category = 'Arrows';

export default ArrowFatRightBold20;
