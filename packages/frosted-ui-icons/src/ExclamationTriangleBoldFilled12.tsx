import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangleBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.98926 1.69012C4.84672 0.0824896 7.15208 0.0827292 8.00977 1.69012L11.709 8.62762C12.5182 10.1449 11.4188 11.9772 9.69922 11.9772H2.2998C0.580519 11.9769 -0.519088 10.1447 0.290039 8.62762L3.98926 1.69012ZM5.99902 8.25067C5.58501 8.25091 5.24902 8.58661 5.24902 9.00067C5.24938 9.41443 5.58523 9.75043 5.99902 9.75067C6.41302 9.75067 6.74867 9.41458 6.74902 9.00067C6.74902 8.58646 6.41324 8.25067 5.99902 8.25067ZM5.99902 4.25067C5.58507 4.25098 5.24902 4.58665 5.24902 5.00067V6.75067C5.24938 7.16439 5.58529 7.50037 5.99902 7.50067C6.41302 7.50067 6.74867 7.16458 6.74902 6.75067V5.00067C6.74902 4.58646 6.41324 4.25067 5.99902 4.25067Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationTriangleBoldFilled12.category = 'Interface General';

export default ExclamationTriangleBoldFilled12;
