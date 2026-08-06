import * as React from 'react';
import { IconProps } from './types';

export const ShieldBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldBoldFilled24"
      {...props}
    >
      <path
        d="M10.957 0.186401C11.6297 -0.0621899 12.3703 -0.0620727 13.043 0.186401L21.0352 3.1405C22.2158 3.57691 22.9998 4.70215 23 5.96082V13.1571C22.9998 16.4027 20.5115 18.9805 18.1895 20.7098C15.8072 22.4839 13.2665 23.6126 12.5674 23.9081C12.2007 24.0629 11.7993 24.063 11.4326 23.9081C10.7328 23.6123 8.19238 22.4836 5.81055 20.7098C3.4886 18.9805 1.00022 16.4026 1 13.1571V5.96082C1.00016 4.70229 1.78445 3.57701 2.96484 3.1405L10.957 0.186401Z"
        fill={color}
      />
    </svg>
  );
};

ShieldBoldFilled24.category = 'Security';

export default ShieldBoldFilled24;
