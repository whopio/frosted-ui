import * as React from 'react';
import { IconProps } from './types';

export const PlusBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PlusBoldFilled24"
      {...props}
    >
      <path
        d="M12 .75c.828 0 1.5.672 1.5 1.5v8.25h8.25c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H13.5v8.25c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V13.5H2.25c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h8.25V2.25c0-.828.672-1.5 1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

PlusBoldFilled24.category = 'Interface General';

export default PlusBoldFilled24;
