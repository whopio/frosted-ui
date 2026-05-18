import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevron32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M24.9696 20.2197C25.2625 19.9268 25.7372 19.9269 26.0301 20.2197C26.323 20.5126 26.323 20.9874 26.0301 21.2803L16.5301 30.7803C16.2372 31.073 15.7624 31.0731 15.4696 30.7803L5.96959 21.2803C5.67676 20.9874 5.67684 20.5126 5.96959 20.2197C6.26247 19.9268 6.73724 19.9269 7.03013 20.2197L15.9999 29.1895L24.9696 20.2197ZM15.9999 1C16.1987 1 16.3895 1.07912 16.5301 1.21973L26.0301 10.7197C26.323 11.0126 26.323 11.4874 26.0301 11.7803C25.7372 12.073 25.2624 12.0731 24.9696 11.7803L15.9999 2.81055L7.03013 11.7803C6.73723 12.073 6.26243 12.0731 5.96959 11.7803C5.67681 11.4874 5.67686 11.0126 5.96959 10.7197L15.4696 1.21973C15.6102 1.07912 15.801 1.00006 15.9999 1Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevron32.category = 'Arrows';

export default DoubleChevron32;
