import * as React from 'react';
import { IconProps } from './types';

export const Paypal32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4.15881 25.8832H7.5037C8.06758 25.8832 8.55911 25.4994 8.69587 24.9523L10.0738 19.4408C10.2105 18.8937 10.702 18.51 11.2659 18.51H12.7642C23.3736 18.51 24.8488 11.913 25.0296 10.7096C25.0484 10.5843 25.0642 10.4621 25.0783 10.3361C25.1999 9.24837 25.4287 3.76358 17.6797 3.76358H9.82026C8.66832 3.76358 7.67094 4.56365 7.42105 5.68815L3.19913 24.6868C3.0627 25.3008 3.52988 25.8832 4.15881 25.8832Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.39612 25.8829L6.86959 28.3839C6.74095 28.9949 7.20713 29.5695 7.83154 29.5695L11.7568 29.5697C12.3426 29.5698 12.847 29.1563 12.9619 28.5819L13.7956 24.413C13.9105 23.8386 14.4148 23.4252 15.0006 23.4252H16.4509C27.0085 23.4252 28.5208 15.8875 28.7136 14.4455C28.7347 14.2874 28.7555 14.1325 28.7723 13.9738C28.8686 13.0641 28.9328 9.7418 25.053 8.10425"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Paypal32;
