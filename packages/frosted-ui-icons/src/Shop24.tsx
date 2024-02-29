import * as React from 'react';
import { IconProps } from './types';

export const Shop24 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M3.75 10.5V17.7725C3.75 19.693 5.30692 21.2499 7.22749 21.2499H16.7725C18.6931 21.2499 20.25 19.693 20.25 17.7725V10.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M9 21.25V15.9254C9 15.5524 9.3024 15.25 9.67544 15.25H14.3246C14.6976 15.25 15 15.5524 15 15.9254V21.25"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M21.4383 4.97968C20.8168 3.62124 19.4602 2.75 17.9664 2.75H14.7504L15.5265 7.87539C15.7768 9.52824 17.1975 10.75 18.8692 10.75H18.969C20.781 10.75 22.25 9.28105 22.25 7.46901 22.25 6.99799 22.1486 6.53249 21.9526 6.10416L21.4383 4.97968zM2.56174 4.97968C3.18315 3.62124 4.53976 2.75 6.03359 2.75H9.24963L8.47348 7.87539C8.22319 9.52824 6.80248 10.75 5.13079 10.75H5.03099C3.21895 10.75 1.75 9.28105 1.75 7.46901 1.75 6.99799 1.85142 6.53249 2.04735 6.10416L2.56174 4.97968zM8.65954 6.87511L9.27163 2.75H14.7322L15.3443 6.8751C15.6471 8.91638 14.0655 10.75 12.0019 10.75 9.93828 10.75 8.35666 8.91638 8.65954 6.87511z"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  },
);

export default Shop24;
