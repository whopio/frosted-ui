import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10 0.998047C14.9703 0.998311 19 5.02765 19 9.99805C19 12.1233 18.2602 14.0745 17.0283 15.6143L22.7031 21.2871C23.0936 21.6775 23.0934 22.3106 22.7031 22.7012C22.3126 23.0917 21.6796 23.0916 21.2891 22.7012L15.6143 17.0283C14.0749 18.2594 12.1244 18.9979 10 18.998C5.02946 18.998 0.999056 14.9686 0.999023 9.99805C0.999023 5.02748 5.02944 0.998047 10 0.998047ZM10 2.99805C6.13401 2.99805 3 6.13205 3 9.99805C3.00003 13.864 6.13403 16.998 10 16.998C13.8657 16.9978 17 13.8638 17 9.99805C17 6.13222 13.8658 2.99831 10 2.99805Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MagnifyingGlassBold24.category = 'Product Icons';

export default MagnifyingGlassBold24;
