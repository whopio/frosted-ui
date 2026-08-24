import * as React from 'react';
import { IconProps } from './types';

export const RotateBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RotateBold12"
      {...props}
    >
      <path
        d="M11 7c.552 0 1 .448 1 1v2.5c0 .552-.448 1-1 1s-1-.448-1-1v-.03C8.939 11.42 7.538 12 6 12 3.538 12 1.425 10.517.5 8.4c-.221-.506.01-1.095.516-1.316.506-.221 1.095.01 1.316.516C2.95 9.014 4.362 10 6 10c1.013 0 1.939-.378 2.645-1H8.5c-.552 0-1-.448-1-1s.448-1 1-1H11zM6 0c2.462 0 4.575 1.483 5.5 3.6.221.506-.01 1.095-.516 1.316-.506.221-1.095-.01-1.316-.516C9.05 2.986 7.638 2 6 2c-1.013 0-1.939.378-2.645 1H3.5c.552 0 1 .448 1 1s-.448 1-1 1H1c-.552 0-1-.448-1-1V1.5c0-.552.448-1 1-1s1 .448 1 1v.028C3.061.578 4.462 0 6 0z"
        fill={color}
      />
    </svg>
  );
};

RotateBold12.category = 'Arrows';

export default RotateBold12;
