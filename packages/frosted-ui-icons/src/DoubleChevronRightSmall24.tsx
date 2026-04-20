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
        d="M11.4485 7.55145C11.1557 7.25854 11.1556 6.78374 11.4485 6.49091C11.7413 6.19822 12.2162 6.19822 12.509 6.49091L17.1555 11.1374C17.6435 11.6255 17.6434 12.4168 17.1555 12.905L12.509 17.5515C12.2161 17.8443 11.7414 17.8443 11.4485 17.5515C11.1557 17.2586 11.1556 16.7837 11.4485 16.4909L15.9182 12.0212L11.4485 7.55145ZM6.69847 7.55145C6.40574 7.25854 6.40563 6.78374 6.69847 6.49091C6.99133 6.19823 7.46617 6.19822 7.75902 6.49091L12.4055 11.1374C12.8935 11.6255 12.8934 12.4168 12.4055 12.905L7.75902 17.5515C7.46613 17.8443 6.99137 17.8443 6.69847 17.5515C6.40574 17.2586 6.40564 16.7837 6.69847 16.4909L11.1682 12.0212L6.69847 7.55145Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronRightSmall24.category = 'Arrows';

export default DoubleChevronRightSmall24;
