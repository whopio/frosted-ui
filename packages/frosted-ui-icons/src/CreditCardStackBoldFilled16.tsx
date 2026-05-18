import * as React from 'react';
import { IconProps } from './types';

export const CreditCardStackBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M16 11.6566C15.9999 13.4237 14.567 14.8566 12.7998 14.8568H6.05762C4.29034 14.8568 2.85748 13.4238 2.85742 11.6566V9.00031H16V11.6566ZM6 10.8577C5.36882 10.8577 4.85742 11.3691 4.85742 12.0003C4.85754 12.6314 5.36889 13.1429 6 13.1429H8.28613C8.91692 13.1425 9.42859 12.6312 9.42871 12.0003C9.42871 11.3694 8.917 10.8581 8.28613 10.8577H6ZM9.94238 1.14288C11.2159 1.14288 12.3159 1.88703 12.8311 2.96417H6.05762C3.40276 2.96417 1.25009 5.11696 1.25 7.77179V10.7601C0.491281 10.1749 0 9.25998 0 8.22784V4.34308C0.00016962 2.576 1.43312 1.14303 3.2002 1.14288H9.94238ZM12.7998 4.57159C14.3009 4.57172 15.5609 5.6058 15.9062 7.00031H2.95117C3.29653 5.60571 4.5564 4.57159 6.05762 4.57159H12.7998Z"
        fill={color}
      />
    </svg>
  );
};

CreditCardStackBoldFilled16.category = 'Money & Shopping';

export default CreditCardStackBoldFilled16;
