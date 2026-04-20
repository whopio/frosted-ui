import * as React from 'react';
import { IconProps } from './types';

export const Checkmark16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M13.7646 3.58032C14.0575 3.28747 14.5323 3.28755 14.8252 3.58032C15.118 3.87322 15.1181 4.34799 14.8252 4.64087L6.16309 13.303C6.02244 13.4436 5.8317 13.5227 5.63281 13.5227C5.43397 13.5227 5.24316 13.4436 5.10254 13.303L1.21973 9.42017C0.926853 9.12729 0.926891 8.65252 1.21973 8.35962C1.51262 8.06673 1.98738 8.06673 2.28027 8.35962L5.63281 11.7122L13.7646 3.58032Z"
        fill={color}
      />
    </svg>
  );
};

Checkmark16.category = 'Checkmarks';

export default Checkmark16;
