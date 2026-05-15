import * as React from 'react';
import { IconProps } from './types';

export const ShieldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M11.1035 0.32342C11.741 0.0807249 12.4461 0.0835924 13.082 0.330256L20.7402 3.30096C21.8009 3.71265 22.4999 4.73346 22.5 5.87127V13.2101C22.4997 16.3389 20.2119 18.8759 17.9766 20.6281C15.7041 22.4094 13.271 23.5488 12.5811 23.8556C12.2678 23.9949 11.9221 23.9958 11.6074 23.8586C10.9101 23.5544 8.43064 22.4167 6.11426 20.6359C3.83817 18.8861 1.50033 16.3473 1.5 13.2101V5.88104C1.5 4.73674 2.20701 3.71113 3.27637 3.30389L11.1035 0.32342Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldFilled24.category = 'Security';

export default ShieldFilled24;
