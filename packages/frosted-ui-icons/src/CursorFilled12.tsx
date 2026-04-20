import * as React from 'react';
import { IconProps } from './types';

export const CursorFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M3.95501 11.4256L0.909885 2.62856C0.541006 1.56291 1.56291 0.541007 2.62856 0.909885L11.4256 3.95501C12.3861 4.2875 12.4588 5.61798 11.5402 6.0531L10.303 6.63912C9.62755 6.95909 9.47294 7.85168 10.0015 8.3802L11.8429 10.2216C12.0456 10.4243 12.1595 10.6993 12.1595 10.9859V11.0786C12.1595 11.6756 11.6756 12.1595 11.0786 12.1595H10.9859C10.6993 12.1595 10.4243 12.0456 10.2216 11.8429L8.38019 10.0015C7.85168 9.47294 6.95909 9.62755 6.63912 10.303L6.0531 11.5402C5.61798 12.4588 4.2875 12.3861 3.95501 11.4256Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

CursorFilled12.category = 'Arrows';

export default CursorFilled12;
