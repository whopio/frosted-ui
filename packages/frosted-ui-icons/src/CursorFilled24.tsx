import * as React from 'react';
import { IconProps } from './types';

export const CursorFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CursorFilled24"
      {...props}
    >
      <path
        d="M23 20.66c0 1.292-1.048 2.34-2.34 2.34-.621 0-1.217-.247-1.656-.685l-4.629-4.63c-.115-.114-.306-.09-.39.05l-2.6 4.332c-.825 1.375-2.873 1.192-3.441-.308L1.162 3.869C.52 2.177 2.177.52 3.87 1.161l17.89 6.783c1.499.568 1.682 2.616.307 3.441l-4.332 2.6c-.14.083-.164.275-.049.39l4.629 4.63c.439.438.685 1.034.685 1.654z"
        fill={color}
      />
    </svg>
  );
};

CursorFilled24.category = 'Arrows';

export default CursorFilled24;
