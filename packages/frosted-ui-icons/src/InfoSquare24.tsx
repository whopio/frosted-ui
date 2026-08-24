import * as React from 'react';
import { IconProps } from './types';

export const InfoSquare24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InfoSquare24"
      {...props}
    >
      <path
        d="M16.5 1C20.09 1 23 3.91 23 7.5v9c0 3.59-2.91 6.5-6.5 6.5h-9C3.91 23 1 20.09 1 16.5v-9C1 3.91 3.91 1 7.5 1h9zm-9 1.5c-2.761 0-5 2.239-5 5v9c0 2.761 2.239 5 5 5h9c2.761 0 5-2.239 5-5v-9c0-2.761-2.239-5-5-5h-9zm4.501 7.75c.414 0 .75.336.75.75v6.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75V11c0-.414.336-.75.75-.75zm0-4.25c.607 0 1.1.493 1.1 1.1 0 .607-.493 1.099-1.1 1.1-.607 0-1.1-.493-1.1-1.1 0-.608.493-1.1 1.1-1.1z"
        fill={color}
      />
    </svg>
  );
};

InfoSquare24.category = 'Interface General';

export default InfoSquare24;
