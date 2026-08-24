import * as React from 'react';
import { IconProps } from './types';

export const PulseBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PulseBold24"
      {...props}
    >
      <path
        d="M22.293 6.293c.39-.39 1.023-.39 1.414 0 .39.39.39 1.024 0 1.414l-8.676 8.676c-.57.57-1.493.57-2.062 0l-4.97-4.969-6.292 6.293c-.39.39-1.024.39-1.414 0-.39-.39-.39-1.023 0-1.414l6.676-6.676.11-.1c.535-.436 1.307-.436 1.842 0l.11.1L14 14.586l8.293-8.293z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PulseBold24.category = 'Stats & Charts';

export default PulseBold24;
