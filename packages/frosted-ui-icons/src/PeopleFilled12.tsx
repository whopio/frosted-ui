import * as React from 'react';
import { IconProps } from './types';

export const PeopleFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PeopleFilled12"
      {...props}
    >
      <path
        d="M4.25 7.25c2.224 0 3.854 1.662 4.187 3.36.162.831-.544 1.39-1.187 1.39h-6C.607 12-.1 11.441.063 10.61l.078-.318C.6 8.711 2.165 7.25 4.25 7.25zm5.491 2.438c-.301-.905.338-1.896 1.026-1.236.631.607 1.057 1.378 1.21 2.157.162.832-.544 1.39-1.187 1.391-.506 0-.849-.553-.831-1.059.007-.2-.01-.407-.05-.62-.042-.212-.098-.424-.168-.633zM4.25.5c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm3.54 0c1.657 0 3 1.343 3 3s-1.343 3-3 3c-.074 0-.11-.09-.063-.146.638-.777 1.022-1.77 1.022-2.854S8.365 1.421 7.727.645C7.68.588 7.717.5 7.79.5z"
        fill={color}
      />
    </svg>
  );
};

PeopleFilled12.category = 'People';

export default PeopleFilled12;
