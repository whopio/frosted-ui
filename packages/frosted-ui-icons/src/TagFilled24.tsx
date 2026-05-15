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
        d="M20.0005 0.000976562C22.2096 0.000976562 24.0004 1.79184 24.0005 4.00098V10.5469C24.0004 12.0717 23.395 13.5341 22.3169 14.6123L14.5249 22.4043C12.6698 24.2591 9.66201 24.2592 7.80709 22.4043L1.59713 16.1943C-0.257606 14.3394 -0.257668 11.3315 1.59713 9.47656L9.38912 1.68457C10.4674 0.606375 11.9307 0.00103289 13.4555 0.000976562H20.0005ZM16.5005 4.25C14.7055 4.25 13.2505 5.70507 13.2505 7.5C13.2505 9.29493 14.7055 10.75 16.5005 10.75C18.2952 10.7498 19.7505 9.29479 19.7505 7.5C19.7505 5.70521 18.2952 4.25023 16.5005 4.25Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

TagFilled24.category = 'Interface General';

export default TagFilled24;
