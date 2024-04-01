import * as React from 'react';
import { IconProps } from './types';

export const Discord20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M15.5536 4.92572C14.5024 4.44191 13.3926 4.09867 12.2526 3.90479C12.0966 4.18511 11.9556 4.47353 11.8298 4.76884C10.6156 4.5849 9.38072 4.5849 8.16647 4.76884C8.0407 4.47357 7.89955 4.18515 7.74363 3.90479C6.60295 4.10031 5.49246 4.44436 4.44019 4.92825C2.35116 8.03532 1.78486 11.0652 2.068 14.0521C3.29139 14.9608 4.66072 15.6518 6.11645 16.0952C6.44424 15.652 6.73429 15.1819 6.98352 14.6897C6.51014 14.512 6.05323 14.2927 5.6181 14.0344C5.73262 13.951 5.84462 13.8649 5.95285 13.7814C7.21898 14.38 8.60086 14.6903 10.0001 14.6903C11.3992 14.6903 12.7811 14.38 14.0472 13.7814C14.1567 13.8712 14.2687 13.9573 14.382 14.0344C13.946 14.2931 13.4883 14.5128 13.014 14.691C13.263 15.183 13.553 15.6527 13.8811 16.0952C15.3381 15.6536 16.7084 14.9629 17.9321 14.0534C18.2643 10.5896 17.3645 7.58748 15.5536 4.92572Z"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M5.9024 10.6098C5.9024 11.4954 6.55428 12.2152 7.34333 12.2152 8.14748 12.2152 8.76914 11.4954 8.78303 10.6098 8.79685 9.72423 8.15 8.99805 7.34081 8.99805 6.53163 8.99805 5.9024 9.72423 5.9024 10.6098zM11.2194 10.6098C11.2194 11.4954 11.8687 12.2152 12.659 12.2152 13.4632 12.2152 14.0836 11.4954 14.0974 10.6098 14.1113 9.72423 13.4695 8.99805 12.659 8.99805 11.8486 8.99805 11.2194 9.72423 11.2194 10.6098z"
          fill={color}
        />
      </svg>
    );
  },
);

export default Discord20;
