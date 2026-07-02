import * as React from 'react';
import { IconProps } from './types';

export const CursorFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M31.0007 28.1267C31.0007 29.7136 29.7136 30.9997 28.1267 30.9997C27.367 30.9997 26.6377 30.6988 26.0993 30.1628L19.0212 23.1169C18.905 23.0012 18.7108 23.0268 18.6286 23.1687L14.7292 29.8981C13.7792 31.5375 11.3523 31.3404 10.6794 29.569L1.20089 4.61885C0.389061 2.48196 2.48196 0.389068 4.61886 1.20088L29.5691 10.6794C31.3404 11.3523 31.5377 13.7792 29.8982 14.7292L23.1687 18.6286C23.0268 18.7109 23.0012 18.905 23.1169 19.0212L30.1628 26.0993C30.6988 26.6378 31.0007 27.3669 31.0007 28.1267Z"
        fill={color}
      />
    </svg>
  );
};

CursorFilled32.category = 'Arrows';

export default CursorFilled32;
