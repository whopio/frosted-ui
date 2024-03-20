import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneFilled16 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M15.6184 7.37466L0.9752 0.0714624C0.443803 -0.192736 -0.142991 0.318887 0.0314055 0.897607L2.0462 6.6932C2.12827 6.96369 2.36217 7.1566 2.63915 7.17966L9.52475 8.00161L2.63915 8.82356C2.36217 8.84663 2.12827 9.03954 2.0462 9.31002L0.0314055 15.1035C-0.142991 15.6822 0.441751 16.1939 0.9752 15.9276L15.6204 8.62437C15.8892 8.49017 16 8.29936 16 7.99952C16 7.69967 15.8913 7.50886 15.6204 7.37466H15.6184Z"
          fill={color}
        />
      </svg>
    );
  },
);

export default PaperAirplaneFilled16;
