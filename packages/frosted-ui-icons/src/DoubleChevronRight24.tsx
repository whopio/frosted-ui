import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRight24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.71205 2.27626C9.41916 1.98347 9.41935 1.50867 9.71205 1.21572C10.0048 0.922846 10.4796 0.922106 10.7726 1.21474L20.6046 11.0438C21.1313 11.5707 21.1315 12.4253 20.6046 12.952L10.7726 22.7811C10.4798 23.0738 10.0049 23.0736 9.71205 22.7811C9.41925 22.4882 9.41924 22.0135 9.71205 21.7206L19.4367 11.9989L9.71205 2.27626ZM3.21498 2.27626C2.92208 1.98346 2.92225 1.50867 3.21498 1.21572C3.50776 0.922846 3.98257 0.922106 4.27553 1.21474L14.1076 11.0438C14.6345 11.5707 14.6345 12.4252 14.1076 12.952L4.27553 22.7811C3.98266 23.0739 3.50784 23.0739 3.21498 22.7811C2.92217 22.4882 2.92214 22.0135 3.21498 21.7206L12.9396 11.9989L3.21498 2.27626Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRight24.category = 'Arrows';

export default DoubleChevronRight24;
