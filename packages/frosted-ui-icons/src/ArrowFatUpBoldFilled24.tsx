import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatUpBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ArrowFatUpBoldFilled24"
      {...props}
    >
      <path
        d="M18 13h2.661c1.384 0 2.094-1.657 1.14-2.66l-8.246-8.657c-.846-.889-2.263-.889-3.11 0L2.2 10.34C1.245 11.343 1.956 13 3.34 13H6v7.565C6 21.91 7.09 23 8.435 23h7.13C16.91 23 18 21.91 18 20.565V13z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatUpBoldFilled24.category = 'Arrows';

export default ArrowFatUpBoldFilled24;
