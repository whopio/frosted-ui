import * as React from 'react';
import { IconProps } from './types';

export const ExpandBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExpandBoldFilled32"
      {...props}
    >
      <path
        d="M12.19 17.69c.585-.586 1.535-.586 2.12 0 .586.585.586 1.535 0 2.12L6.121 28h7.129c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H2.5c-.828 0-1.5-.672-1.5-1.5V18.75c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5v7.129l8.19-8.19zM29.5 1c.828 0 1.5.672 1.5 1.5v10.75c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5V6.121l-8.19 8.19c-.585.585-1.535.585-2.12 0-.586-.586-.586-1.536 0-2.121L25.878 4H18.75c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5H29.5z"
        fill={color}
      />
    </svg>
  );
};

ExpandBoldFilled32.category = 'Arrows';

export default ExpandBoldFilled32;
