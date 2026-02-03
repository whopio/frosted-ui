import * as React from 'react';
import { IconProps } from './types';

export const Bolt12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M5.37109 0.430908C5.94592 -0.367864 7.2499 0.025355 7.25 1.04712V4.00024H9.46094C10.2839 4.00055 10.7866 4.90442 10.3525 5.60376L6.69238 11.5022C6.13517 12.3995 4.75051 12.0046 4.75 10.9485V8.25024H2.53027C1.71416 8.25024 1.21012 7.36023 1.62988 6.6604L5.31836 0.511963L5.37109 0.430908ZM3.3252 6.75024H5.2002C5.77987 6.75045 6.24991 7.22035 6.25 7.80005V9.36938L8.65137 5.50024H6.7998C6.2201 5.50014 5.75017 5.03013 5.75 4.45044V2.70728L3.3252 6.75024Z"
        fill={color}
      />
    </svg>
  );
};

Bolt12.category = 'Nature & Weather';

export default Bolt12;
