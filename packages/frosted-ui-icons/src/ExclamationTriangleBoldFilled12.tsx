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
        d="M3.98926 1.69009C4.84672 0.082459 7.15208 0.0826986 8.00977 1.69009L11.709 8.62759C12.5182 10.1448 11.4188 11.9772 9.69922 11.9772H2.2998C0.580519 11.9769 -0.519088 10.1447 0.290039 8.62759L3.98926 1.69009ZM5.99902 8.25064C5.58501 8.25088 5.24902 8.58657 5.24902 9.00064C5.24938 9.4144 5.58523 9.7504 5.99902 9.75064C6.41302 9.75064 6.74867 9.41455 6.74902 9.00064C6.74902 8.58643 6.41324 8.25064 5.99902 8.25064ZM5.99902 4.25064C5.58507 4.25095 5.24902 4.58662 5.24902 5.00064V6.75064C5.24938 7.16436 5.58529 7.50034 5.99902 7.50064C6.41302 7.50064 6.74867 7.16455 6.74902 6.75064V5.00064C6.74902 4.58643 6.41324 4.25064 5.99902 4.25064Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationTriangleBoldFilled12.category = 'Interface General';

export default ExclamationTriangleBoldFilled12;
