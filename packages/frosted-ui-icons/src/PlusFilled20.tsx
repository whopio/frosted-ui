import * as React from 'react';
import { IconProps } from './types';

export const PlusFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10 0.549805C10.6627 0.549805 11.2002 1.08726 11.2002 1.75V8.7998H18.25C18.9127 8.7998 19.4502 9.33726 19.4502 10C19.4502 10.6627 18.9127 11.2002 18.25 11.2002H11.2002V18.25C11.2002 18.9127 10.6627 19.4502 10 19.4502C9.33726 19.4502 8.7998 18.9127 8.7998 18.25V11.2002H1.75C1.08726 11.2002 0.549805 10.6627 0.549805 10C0.549805 9.33726 1.08726 8.7998 1.75 8.7998H8.7998V1.75C8.7998 1.08726 9.33726 0.549805 10 0.549805Z"
        fill={color}
      />
    </svg>
  );
};

PlusFilled20.category = 'Interface General';

export default PlusFilled20;
