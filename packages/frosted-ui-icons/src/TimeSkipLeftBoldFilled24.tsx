import * as React from 'react';
import { IconProps } from './types';

export const TimeSkipLeftBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TimeSkipLeftBoldFilled24"
      {...props}
    >
      <path
        d="M12 .5c4.944 0 9.156 3.12 10.782 7.493.465 1.25.718 2.6.718 4.007 0 1.406-.253 2.757-.718 4.007C21.156 20.38 16.944 23.5 12 23.5s-9.156-3.12-10.782-7.493c-.289-.777.107-1.64.884-1.929.776-.288 1.64.108 1.928.884C5.234 18.198 8.35 20.5 12 20.5c3.65 0 6.767-2.302 7.97-5.538.343-.92.53-1.918.53-2.962 0-1.044-.187-2.042-.53-2.962C18.768 5.802 15.65 3.5 12 3.5 9.176 3.5 6.673 4.878 5.127 7H7c.828 0 1.5.672 1.5 1.5S7.828 10 7 10H2.84c-.142.02-.288.022-.435 0H2C1.172 10 .5 9.328.5 8.5v-5C.5 2.672 1.172 2 2 2s1.5.672 1.5 1.5v.756C5.603 1.949 8.631.5 12 .5zm-.25 5c.828 0 1.5.672 1.5 1.5v4.78l2.188 1.75c.646.517.75 1.461.233 2.108-.518.646-1.462.75-2.108.233l-2.75-2.2-.127-.112c-.278-.28-.436-.66-.436-1.059V7c0-.828.672-1.5 1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

TimeSkipLeftBoldFilled24.category = 'Arrows';

export default TimeSkipLeftBoldFilled24;
