import * as React from 'react';
import { IconProps } from './types';

export const HeartBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="HeartBoldFilled16"
      {...props}
    >
      <path
        d="M11.5 1.418c2.458 0 4.5 1.935 4.5 4.627 0 2.85-1.6 5.02-3.232 6.494-1.638 1.48-3.43 2.37-4.1 2.677-.427.195-.91.195-1.337 0-.67-.306-2.46-1.198-4.099-2.677C1.6 11.065 0 8.894 0 6.045c0-2.692 2.042-4.627 4.5-4.627 1.613 0 2.734.759 3.426 1.486.026.027.05.056.074.083.025-.027.048-.056.074-.083.692-.727 1.813-1.486 3.426-1.486z"
        fill={color}
      />
    </svg>
  );
};

HeartBoldFilled16.category = 'Interface General';

export default HeartBoldFilled16;
