import * as React from 'react';
import { IconProps } from './types';

export const Checkmark24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M21.7197 4.46973C22.0123 4.17715 22.4863 4.17668 22.7793 4.46875C23.0725 4.76138 23.0739 5.23712 22.7812 5.53027L8.71582 19.6191C8.57521 19.76 8.3836 19.8398 8.18457 19.8398C7.98587 19.8397 7.79482 19.7606 7.6543 19.6201L1.21973 13.1855C0.926833 12.8927 0.926833 12.4169 1.21973 12.124C1.51257 11.8315 1.98745 11.8314 2.28027 12.124L8.18457 18.0283L21.7197 4.46973Z"
        fill={color}
      />
    </svg>
  );
};

Checkmark24.category = 'Checkmarks';

export default Checkmark24;
