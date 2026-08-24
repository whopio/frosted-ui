import * as React from 'react';
import { IconProps } from './types';

export const RotateFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateFilled20"
      {...props}
    >
      <path
        d="M18.25 11.5c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25S17 17.44 17 16.75v-.33c-1.736 1.892-4.227 3.08-6.999 3.08-4.099 0-7.589-2.595-8.922-6.227-.238-.649.095-1.367.743-1.605.648-.237 1.367.095 1.605.743C4.41 15.091 6.984 17 10 17c2.377 0 4.478-1.186 5.743-3H14.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h4zM10.001.5c4.098 0 7.588 2.595 8.92 6.228.239.647-.095 1.366-.742 1.604-.648.238-1.367-.095-1.605-.743C15.591 4.909 13.017 3 10.001 3c-2.377 0-4.48 1.186-5.745 3H5.75C6.44 6 7 6.56 7 7.25S6.44 8.5 5.75 8.5h-4C1.06 8.5.5 7.94.5 7.25v-4C.5 2.56 1.06 2 1.75 2S3 2.56 3 3.25v.33C4.736 1.686 7.23.5 10.001.5z"
        fill={color}
      />
    </svg>
  );
};

RotateFilled20.category = 'Arrows';

export default RotateFilled20;
