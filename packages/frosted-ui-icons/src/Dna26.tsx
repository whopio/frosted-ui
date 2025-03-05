import * as React from 'react';
import { IconProps } from './types';

export const Dna26 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M2.75 0C3.16421 0 3.5 0.335787 3.5 0.75C3.5 0.834588 3.50143 0.917909 3.50424 0.999999L12.4957 1C12.4986 0.917912 12.5 0.834592 12.5 0.750007C12.5 0.335793 12.8358 6.55097e-06 13.25 6.51476e-06C13.6642 6.47854e-06 14 0.335793 14 0.750006C14 4.75567 11.2729 6.63573 9.33228 7.97359C9.01768 8.19048 8.72373 8.39313 8.46544 8.58826C8.45677 8.59513 8.44797 8.60179 8.43906 8.60823C8.10865 8.85813 7.76482 9.09938 7.41924 9.34185C6.88999 9.7132 6.35661 10.0875 5.86112 10.5L10.1455 10.5C9.99969 10.3776 9.85065 10.2588 9.69944 10.1426C9.37099 9.89018 9.30932 9.41932 9.5617 9.09088C9.81408 8.76243 10.2849 8.70077 10.6134 8.95315C12.2914 10.2426 14 12.0563 14 15.25C14 15.6642 13.6642 16 13.25 16C12.8358 16 12.5 15.6642 12.5 15.25C12.5 15.1654 12.4985 15.0821 12.4957 15L3.50424 15C3.50143 15.0821 3.5 15.1654 3.5 15.25C3.5 15.6642 3.16421 16 2.75 16C2.33579 16 2 15.6642 2 15.25C2 11.2443 4.72703 9.36424 6.66762 8.02637L6.70586 8L6.66764 7.97365C4.72704 6.63577 2 4.75571 2 0.75C2 0.335786 2.33579 0 2.75 0ZM11.5445 12L4.45157 12C4.14936 12.4415 3.90345 12.9348 3.73736 13.5L12.2598 13.5C12.093 12.9369 11.8467 12.4429 11.5445 12ZM7.4192 6.65811C6.88995 6.28677 6.35661 5.91255 5.86112 5.5L10.1388 5.5C9.64329 5.91252 9.10998 6.28671 8.58076 6.65804C8.3859 6.79476 8.19158 6.9311 7.99992 7.06882C7.8083 6.93113 7.61401 6.79481 7.4192 6.65811ZM3.73736 2.5C3.90345 3.06516 4.14936 3.55853 4.45157 4L11.5484 4C11.8506 3.55853 12.0965 3.06517 12.2626 2.5L3.73736 2.5Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Dna26;
