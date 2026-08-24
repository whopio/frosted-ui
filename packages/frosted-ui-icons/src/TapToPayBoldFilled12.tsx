import * as React from 'react';
import { IconProps } from './types';

export const TapToPayBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="13"
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="TapToPayBoldFilled12"
      {...props}
    >
      <path
        d="M6.99.26c.548-.42 1.333-.315 1.752.233 2.353 3.077 2.353 7.943 0 11.02-.42.548-1.204.653-1.753.233-.547-.419-.652-1.203-.233-1.751 1.668-2.181 1.667-5.802 0-7.983-.419-.548-.315-1.334.233-1.753zM4.244 1.662c.55-.416 1.335-.307 1.751.244 1.737 2.295 1.737 5.897 0 8.193-.416.55-1.2.66-1.75.243-.551-.416-.66-1.201-.244-1.752 1.062-1.403 1.062-3.773 0-5.177-.416-.55-.307-1.334.243-1.75zM1.572 3.05c.562-.4 1.343-.27 1.744.291.561.785.806 1.752.806 2.662 0 .91-.245 1.877-.805 2.661-.402.562-1.183.693-1.745.291-.56-.4-.691-1.181-.29-1.743.203-.285.34-.719.34-1.209 0-.49-.137-.923-.34-1.209-.401-.561-.271-1.343.29-1.744z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

TapToPayBoldFilled12.category = 'Money & Shopping';

export default TapToPayBoldFilled12;
