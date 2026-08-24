import * as React from 'react';
import { IconProps } from './types';

export const CreditCardAddBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardAddBoldFilled20"
      {...props}
    >
      <path
        d="M15.75 11.5c.69 0 1.25.56 1.25 1.25v1c0 .138.112.25.25.25h1c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-1c-.138 0-.25.112-.25.25v1c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-1c0-.138-.112-.25-.25-.25h-1c-.69 0-1.25-.56-1.25-1.25S12.56 14 13.25 14h1c.138 0 .25-.112.25-.25v-1c0-.69.56-1.25 1.25-1.25zm-2.596-2c.276 0 .41.506.209.694-.442.412-.777.937-.959 1.53-.026.086-.094.154-.18.18-1.433.439-2.474 1.77-2.474 3.346 0 .484.1.944.278 1.362.075.178-.048.388-.24.388H5c-2.21 0-4-1.79-4-4V9.75c0-.138.112-.25.25-.25h11.904zM15 3c1.942 0 3.56 1.384 3.923 3.22.029.148-.088.28-.238.28H1.315c-.15 0-.267-.132-.238-.28C1.44 4.384 3.057 3 5 3h10z"
        fill={color}
      />
    </svg>
  );
};

CreditCardAddBoldFilled20.category = 'Money & Shopping';

export default CreditCardAddBoldFilled20;
