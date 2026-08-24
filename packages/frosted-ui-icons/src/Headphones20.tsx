import * as React from 'react';
import { IconProps } from './types';

export const Headphones20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="Headphones20"
      {...props}
    >
      <path
        d="M10 1c3.226 0 5.514 1.29 6.975 3.237C18.412 6.153 19 8.64 19 11v3.5c0 2.485-2.015 4.5-4.5 4.5-1.105 0-2-.895-2-2v-5c0-1.105.895-2 2-2 1.153 0 2.204.434 3 1.146V11c0-2.14-.537-4.278-1.725-5.862C14.61 3.584 12.774 2.5 10 2.5c-2.774 0-4.61 1.084-5.775 2.638C3.037 6.722 2.5 8.86 2.5 11v.146C3.296 10.434 4.347 10 5.5 10c1.105 0 2 .895 2 2v5c0 1.105-.895 2-2 2C3.015 19 1 16.985 1 14.5V11c0-2.36.588-4.847 2.025-6.763C4.485 2.291 6.775 1 10 1zM5.5 11.5c-1.657 0-3 1.343-3 3s1.343 3 3 3c.276 0 .5-.224.5-.5v-5c0-.276-.224-.5-.5-.5zm9 0c-.276 0-.5.224-.5.5v5c0 .276.224.5.5.5 1.657 0 3-1.343 3-3s-1.343-3-3-3z"
        fill={color}
      />
    </svg>
  );
};

Headphones20.category = 'Sound & Music';

export default Headphones20;
