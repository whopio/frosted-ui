import * as React from 'react';
import { IconProps } from './types';

export const BookFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BookFilled12"
      {...props}
    >
      <path
        d="M.488 1.748c1.61-.96 3.306-.945 4.635-.243.08.042.127.125.127.215v9.838c0 .026-.032.038-.048.018-.71-.938-2.241-1.573-3.733-.781-.31.164-.684.154-.985-.027-.3-.18-.484-.506-.484-.857V2.607c0-.352.186-.679.488-.86zM6.75 1.72c0-.09.048-.173.127-.215 1.329-.702 3.024-.716 4.635.243.302.18.488.507.488.86V9.91c0 .35-.184.677-.484.857-.301.181-.675.191-.985.027-1.492-.792-3.023-.157-3.733.781-.016.02-.048.008-.048-.018V1.72z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BookFilled12.category = 'Communication';

export default BookFilled12;
