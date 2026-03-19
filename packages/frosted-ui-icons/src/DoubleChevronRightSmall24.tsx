import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronRightSmall24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.4484 7.55145C11.1556 7.25854 11.1555 6.78374 11.4484 6.49091C11.7412 6.19822 12.216 6.19822 12.5089 6.49091L17.1554 11.1374C17.6433 11.6255 17.6433 12.4168 17.1554 12.905L12.5089 17.5515C12.216 17.8443 11.7412 17.8443 11.4484 17.5515C11.1556 17.2586 11.1555 16.7837 11.4484 16.4909L15.9181 12.0212L11.4484 7.55145ZM6.69835 7.55145C6.40562 7.25854 6.40551 6.78374 6.69835 6.49091C6.99121 6.19823 7.46605 6.19822 7.7589 6.49091L12.4054 11.1374C12.8933 11.6255 12.8932 12.4168 12.4054 12.905L7.7589 17.5515C7.46601 17.8443 6.99125 17.8443 6.69835 17.5515C6.40561 17.2586 6.40552 16.7837 6.69835 16.4909L11.1681 12.0212L6.69835 7.55145Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmall24.category = 'Arrows';

export default DoubleChevronRightSmall24;
