import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBellBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.4999 1C13.052 1.00016 13.4999 1.44781 13.4999 2C13.4999 2.55219 13.052 2.99984 12.4999 3H10.9999V4.03613C14.0086 4.26334 16.0072 5.53021 17.245 7.39648C18.5615 9.38184 18.9203 11.906 18.9872 14.1367C19.0184 15.1808 18.1701 15.9997 17.1669 16H10.9999V17H16.9999C17.552 17.0002 17.9999 17.4478 17.9999 18C17.9999 18.5522 17.552 18.9998 16.9999 19H2.99986C2.44758 19 1.99986 18.5523 1.99986 18C1.99986 17.4477 2.44758 17 2.99986 17H8.99986V16H2.83287C1.82952 15.9998 0.981285 15.1809 1.01256 14.1367C1.07939 11.9059 1.43822 9.38189 2.75474 7.39648C3.99255 5.53008 5.99075 4.26317 8.99986 4.03613V3H7.49986C6.94758 3 6.49986 2.55228 6.49986 2C6.49986 1.44772 6.94758 1 7.49986 1H12.4999Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReceptionBellBoldFilled20.category = 'Objects';

export default ReceptionBellBoldFilled20;
