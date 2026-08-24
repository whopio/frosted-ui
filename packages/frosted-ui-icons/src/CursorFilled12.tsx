import * as React from 'react';
import { IconProps } from './types';

export const CursorFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CursorFilled12"
      {...props}
    >
      <path
        d="M12.97 11.079c0 1.044-.847 1.89-1.892 1.89h-.092c-.502 0-.983-.199-1.338-.553l-1.842-1.841c-.132-.132-.354-.094-.434.075l-.586 1.237c-.746 1.575-3.027 1.45-3.597-.196L.144 2.894c-.59-1.705 1.045-3.34 2.75-2.75l8.797 3.045c1.646.57 1.77 2.85.196 3.597l-1.237.586c-.169.08-.207.302-.075.434l1.84 1.842c.355.355.555.836.555 1.338v.092z"
        fill={color}
      />
    </svg>
  );
};

CursorFilled12.category = 'Arrows';

export default CursorFilled12;
