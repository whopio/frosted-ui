import * as React from 'react';
import { IconProps } from './types';

export const ShieldUserBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ShieldUserBoldFilled20"
      {...props}
    >
      <path
        d="M10.035 0c.303-.004.606.047.894.154l6.46 2.4C18.359 2.915 19 3.84 19 4.872v6.075c0 2.764-2.042 4.922-3.907 6.342-1.917 1.46-3.953 2.373-4.497 2.606-.17.072-.348.105-.527.104-.199.01-.399-.022-.589-.102-.546-.231-2.6-1.145-4.535-2.604C3.065 15.874 1 13.715 1 10.946V4.874c0-1.035.646-1.96 1.617-2.318L9.146.152c.286-.106.588-.156.89-.152zm-.034 12.002c-1.82 0-3.931.577-4.98 2.741.347.33.726.65 1.128.953 1.514 1.14 3.132 1.92 3.851 2.24.719-.32 2.338-1.1 3.85-2.24.403-.304.782-.623 1.13-.954-1.05-2.163-3.16-2.74-4.979-2.74zm0-7.5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"
        fill={color}
      />
    </svg>
  );
};

ShieldUserBoldFilled20.category = 'Security';

export default ShieldUserBoldFilled20;
