import * as React from 'react';
import { IconProps } from './types';

export const FilterDown20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="FilterDown20"
      {...props}
    >
      <path
        d="M12 15c.414 0 .75.336.75.75s-.336.75-.75.75H8c-.414 0-.75-.336-.75-.75S7.586 15 8 15h4zm2.75-5.75c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h9.5zM17.5 3.5c.414 0 .75.336.75.75s-.336.75-.75.75h-15c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h15z"
        fill={color}
      />
    </svg>
  );
};

FilterDown20.category = 'Text Formatting';

export default FilterDown20;
