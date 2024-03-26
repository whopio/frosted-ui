import * as React from 'react';
import { IconProps } from './types';

export const Youtube20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M16.8369 3.33982C17.5903 3.57305 18.1824 4.25773 18.3841 5.12898C18.7485 6.70657 18.75 10 18.75 10C18.75 10 18.75 13.2935 18.3841 14.8711C18.1824 15.7424 17.5903 16.427 16.8369 16.6602C15.4727 17.0834 10 17.0834 10 17.0834C10 17.0834 4.52728 17.0834 3.16307 16.6602C2.40966 16.427 1.81758 15.7424 1.6159 14.8711C1.25 13.2935 1.25 10 1.25 10C1.25 10 1.25 6.70657 1.6159 5.12898C1.81758 4.25773 2.40966 3.57305 3.16307 3.33982C4.52728 2.91669 10 2.91669 10 2.91669C10 2.91669 15.4727 2.91669 16.8369 3.33982ZM12.6153 9.81984C12.7542 9.90003 12.7542 10.1005 12.6153 10.1807L8.47737 12.5695C8.33848 12.6497 8.16487 12.5495 8.16487 12.3891V7.61139C8.16487 7.45102 8.33848 7.35079 8.47737 7.43097L12.6153 9.81984Z"
          stroke={color}
          clipRule="evenodd"
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Youtube20;
