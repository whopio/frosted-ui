import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftSmall24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M12.5519 7.55145C12.8446 7.25854 12.8447 6.78374 12.5519 6.49091C12.259 6.19822 11.7842 6.19822 11.4913 6.49091L6.84486 11.1374C6.3569 11.6255 6.35699 12.4168 6.84486 12.905L11.4913 17.5515C11.7842 17.8443 12.259 17.8443 12.5519 17.5515C12.8446 17.2586 12.8447 16.7837 12.5519 16.4909L8.08217 12.0212L12.5519 7.55145ZM17.3019 7.55145C17.5946 7.25854 17.5947 6.78374 17.3019 6.49091C17.009 6.19823 16.5342 6.19822 16.2413 6.49091L11.5949 11.1374C11.1069 11.6255 11.107 12.4168 11.5949 12.905L16.2413 17.5515C16.5342 17.8443 17.009 17.8443 17.3019 17.5515C17.5946 17.2586 17.5947 16.7837 17.3019 16.4909L12.8322 12.0212L17.3019 7.55145Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftSmall24.category = 'Arrows';

export default DoubleChevronLeftSmall24;
