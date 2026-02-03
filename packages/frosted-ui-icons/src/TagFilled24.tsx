import * as React from 'react';
import { IconProps } from './types';

export const TagFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M20 0.000976562C22.2091 0.000976562 24 1.79184 24 4.00098V10.5469C23.9999 12.0717 23.3945 13.5341 22.3164 14.6123L14.5244 22.4043C12.6694 24.2591 9.66156 24.2592 7.80664 22.4043L1.59668 16.1943C-0.258056 14.3394 -0.258118 11.3315 1.59668 9.47656L9.38867 1.68457C10.4669 0.606375 11.9302 0.00103289 13.4551 0.000976562H20ZM16.5 4.25C14.7051 4.25 13.25 5.70507 13.25 7.5C13.25 9.29493 14.7051 10.75 16.5 10.75C18.2947 10.7498 19.75 9.29479 19.75 7.5C19.75 5.70521 18.2947 4.25023 16.5 4.25Z"
        fill={color}
      />
    </svg>
  );
};

TagFilled24.category = 'Interface General';

export default TagFilled24;
