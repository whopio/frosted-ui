import * as React from 'react';
import { IconProps } from './types';

export const LightningFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="LightningFilled20"
      {...props}
    >
      <path
        d="M13.46 0c.868 0 1.443.903 1.074 1.69L12.05 7h3.825c1.007 0 1.556 1.176.91 1.948l-8.846 10.59c-.778.93-2.286.232-2.081-.963l1.21-7.075H3.853c-.806 0-1.378-.787-1.129-1.554l2.901-8.925.041-.112C5.893.362 6.43 0 7.03 0h6.43z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

LightningFilled20.category = 'Nature & Weather';

export default LightningFilled20;
