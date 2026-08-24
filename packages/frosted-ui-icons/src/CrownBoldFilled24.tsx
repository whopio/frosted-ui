import * as React from 'react';
import { IconProps } from './types';

export const CrownBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CrownBoldFilled24"
      {...props}
    >
      <path
        d="M21.556 21c0 1.105-.896 2-2 2H4.445c-1.105 0-2-.895-2-2v-1h19.111v1zM10.211 1.342c.737-1.474 2.841-1.474 3.579 0l3.31 6.62 2.828-3.394c1.298-1.556 3.822-.418 3.514 1.585L21.772 17H2.229L.559 6.153C.251 4.15 2.775 3.012 4.073 4.568L6.9 7.963l3.31-6.621z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CrownBoldFilled24.category = 'Objects';

export default CrownBoldFilled24;
