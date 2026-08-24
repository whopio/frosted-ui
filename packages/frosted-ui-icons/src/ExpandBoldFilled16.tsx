import * as React from 'react';
import { IconProps } from './types';

export const ExpandBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExpandBoldFilled16"
      {...props}
    >
      <path
        d="M5.44 8.44c.585-.586 1.535-.586 2.12 0 .586.585.586 1.535 0 2.12L6.122 12H6.5c.828 0 1.5.672 1.5 1.5S7.328 15 6.5 15h-4c-.398 0-.78-.158-1.06-.44-.282-.28-.44-.662-.44-1.06v-4C1 8.672 1.672 8 2.5 8S4 8.672 4 9.5v.379l1.44-1.44zM13.5 1c.828 0 1.5.672 1.5 1.5v4c0 .828-.672 1.5-1.5 1.5S12 7.328 12 6.5v-.379l-1.44 1.44c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.536 0-2.122L9.878 4H9.5C8.672 4 8 3.328 8 2.5S8.672 1 9.5 1h4z"
        fill={color}
      />
    </svg>
  );
};

ExpandBoldFilled16.category = 'Arrows';

export default ExpandBoldFilled16;
