import * as React from 'react';
import { IconProps } from './types';

export const BoltFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M15.2975 1.53685C15.956 0.584362 17.5002 1.03294 17.5007 2.23607V11.9997H24.6471C25.8249 12 26.5435 13.2957 25.9196 14.2947L15.8571 30.3952C15.1782 31.4813 13.5009 31.0002 13.5007 29.7195V19.9997H7.29558C6.1429 19.9997 5.42051 18.7536 5.99382 17.7536L15.236 1.63353L15.2975 1.53685Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BoltFilled32.category = 'Nature & Weather';

export default BoltFilled32;
