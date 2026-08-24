import * as React from 'react';
import { IconProps } from './types';

export const ShieldCheckmarkBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldCheckmarkBoldFilled16"
      {...props}
    >
      <path
        d="M7.254.136c.48-.181 1.012-.181 1.492 0l4.888 1.845C14.456 2.29 15 3.078 15 3.956v5.029c0 2.144-1.642 3.818-3.047 4.887-1.467 1.117-3.024 1.836-3.447 2.023-.325.143-.687.143-1.012 0-.423-.187-1.98-.906-3.447-2.023C2.642 12.803 1 11.13 1 8.985V3.956c0-.878.544-1.665 1.366-1.975L7.254.136zm3.453 5.574c-.39-.39-1.024-.39-1.414 0L7.082 7.921l-.375-.375c-.39-.39-1.024-.39-1.414 0-.39.39-.39 1.024 0 1.414l1.082 1.082c.188.188.442.293.707.293.265 0 .52-.105.707-.293l2.918-2.918c.39-.39.39-1.023 0-1.414z"
        fill={color}
      />
    </svg>
  );
};

ShieldCheckmarkBoldFilled16.category = 'Security';

export default ShieldCheckmarkBoldFilled16;
