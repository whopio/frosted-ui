import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatLeftBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.3059 6L16.8527 6C17.4863 6 18 6.51366 18 7.14729V12.8527C18 13.4863 17.4863 14 16.8527 14H10.3059C10.137 14 10 14.137 10 14.3059V16.9787C10 17.3829 9.51523 17.5897 9.22346 17.3099L2.29091 10.6625C1.91412 10.3012 1.91412 9.69884 2.29091 9.33754L9.22346 2.69015C9.51523 2.41039 10 2.61717 10 3.0214V5.69405C10 5.86302 10.137 6 10.3059 6Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};

ArrowFatLeftBoldFilled20.category = 'Arrows';

export default ArrowFatLeftBoldFilled20;
