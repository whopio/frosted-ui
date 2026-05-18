import * as React from 'react';
import { IconProps } from './types';

export const Lightning16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.8882 0C11.6945 0.000446818 12.226 0.840847 11.8804 1.56934L10.0132 5.5H12.8091C13.7446 5.50038 14.2513 6.59615 13.646 7.30957L6.60596 15.6035C5.88056 16.4581 4.49157 15.8048 4.68702 14.7012L5.60889 9.5H3.22998C2.48425 9.5 1.9554 8.77291 2.18506 8.06348L4.49854 0.920898L4.53565 0.819336C4.74048 0.32667 5.22366 0.000172152 5.76416 0H10.8882ZM3.78174 8H6.29541C6.87011 8.00029 7.30586 8.51999 7.20557 9.08594L6.42237 13.501L11.9409 7H9.10205C8.42328 7 7.97614 6.29283 8.26709 5.67969L10.2524 1.5H5.88721L3.78174 8Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

Lightning16.category = 'Nature & Weather';

export default Lightning16;
