import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronDown24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.7196 9.71279C22.0124 9.41989 22.4871 9.42008 22.7801 9.71279C23.073 10.0056 23.0737 10.4804 22.7811 10.7733L12.952 20.6054C12.4251 21.132 11.5706 21.1322 11.0438 20.6054L1.21467 10.7733C0.922011 10.4805 0.922182 10.0057 1.21467 9.71279C1.50757 9.41998 1.98236 9.41997 2.27522 9.71279L11.9969 19.4374L21.7196 9.71279ZM21.7196 3.21572C22.0124 2.92281 22.4872 2.92298 22.7801 3.21572C23.073 3.50849 23.0737 3.9833 22.7811 4.27626L12.952 14.1083C12.4251 14.6352 11.5706 14.6352 11.0438 14.1083L1.21467 4.27626C0.921908 3.9834 0.921956 3.50858 1.21467 3.21572C1.50758 2.9229 1.98237 2.92287 2.27522 3.21572L11.9969 12.9403L21.7196 3.21572Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronDown24.category = 'Arrows';

export default DoubleChevronDown24;
