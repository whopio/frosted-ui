import * as React from 'react';
import { IconProps } from './types';

export const PencilBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PencilBoldFilled20"
      {...props}
    >
      <path
        d="M15.124 11.04l-7.167 7.167c-.154.154-.356.255-.572.284l-5.5.75c-.31.042-.62-.063-.842-.284-.22-.22-.326-.532-.284-.842l.75-5.5.035-.159c.048-.155.133-.297.25-.413L8.96 4.875l6.164 6.164zM14.688.75c1.025 0 2.01.408 2.734 1.133l.695.695c.726.725 1.133 1.709 1.133 2.735 0 1.025-.407 2.009-1.133 2.734l-1.579 1.578-6.164-6.164 1.58-1.578C12.678 1.158 13.661.75 14.687.75z"
        fill={color}
      />
    </svg>
  );
};

PencilBoldFilled20.category = 'Objects';

export default PencilBoldFilled20;
