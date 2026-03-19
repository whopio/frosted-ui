import * as React from 'react';
import { IconProps } from './types';

export const PineTreeFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.3232 0.282471C11.6932 -0.0939611 12.3059 -0.0941496 12.6758 0.282471L12.751 0.368408L19.7939 9.47192C20.2766 10.0962 19.8312 11.003 19.042 11.0032H16.5469L21.8223 18.5071C22.2646 19.1365 21.8142 20.003 21.0449 20.0032H12.749V23.2542C12.749 23.6684 12.4132 24.0042 11.999 24.0042C11.585 24.0039 11.249 23.6682 11.249 23.2542V20.0032H2.95605C2.1865 20.0032 1.73604 19.1365 2.17871 18.5071L7.45801 11.0032H4.95801C4.16865 11.0032 3.72312 10.0963 4.20605 9.47192L11.248 0.368408L11.3232 0.282471Z"
        fill={color}
      />
    </svg>
  );
};

PineTreeFilled24.category = 'Nature & Weather';

export default PineTreeFilled24;
