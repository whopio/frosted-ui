import * as React from 'react';
import { IconProps } from './types';

export const EyeBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="EyeBoldFilled24"
      {...props}
    >
      <path
        d="M12 3c3.896 0 6.815 2.045 8.749 4.07 1.934 2.025 2.974 4.121 3.136 4.461.053.112.107.272.107.468s-.054.356-.107.469c-.163.34-1.203 2.437-3.136 4.462C18.815 18.955 15.896 21 12 21c-3.896 0-6.815-2.045-8.749-4.07C1.318 14.905.278 12.808.115 12.468c-.053-.113-.107-.273-.107-.469 0-.196.054-.356.107-.468.163-.34 1.202-2.436 3.136-4.46C5.185 5.044 8.104 3 12 3zm-.004 4c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.238-5-5-5zm0 2c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"
        fill={color}
      />
    </svg>
  );
};

EyeBoldFilled24.category = 'Accessibility';

export default EyeBoldFilled24;
