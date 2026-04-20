import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronUpSmallBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.3229 8.05566C10.9086 8.64138 11.8582 8.64136 12.444 8.05566C13.0294 7.46986 13.0296 6.52025 12.444 5.93457L9.29651 2.78711C8.58064 2.07145 7.41966 2.07154 6.70374 2.78711L3.55627 5.93457C2.97055 6.5203 2.97066 7.46986 3.55627 8.05566C4.14205 8.64144 5.09158 8.64144 5.67737 8.05566L7.99963 5.7334L10.3229 8.05566ZM10.3229 13.3057C10.9086 13.8914 11.8582 13.8914 12.444 13.3057C13.0294 12.7199 13.0296 11.7702 12.444 11.1846L9.29651 8.03711C8.58064 7.32144 7.41966 7.32153 6.70374 8.03711L3.55627 11.1846C2.97055 11.7703 2.97066 12.7199 3.55627 13.3057C4.14205 13.8914 5.09158 13.8914 5.67737 13.3057L7.99963 10.9834L10.3229 13.3057Z"
        fill={color}
      />
    </svg>
  );
};

DoubleChevronUpSmallBoldFilled16.category = 'Arrows';

export default DoubleChevronUpSmallBoldFilled16;
