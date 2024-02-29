import * as React from 'react';
import { IconProps } from './types';

export const Home20 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M18.25 17.45V8.51579C18.25 8.03128 18.0318 7.57254 17.6559 7.26681L11.5515 2.30133C11.1131 1.9447 10.5652 1.75 10 1.75C9.43484 1.75 8.88694 1.9447 8.44851 2.30133L2.34405 7.26681C1.96819 7.57254 1.75 8.03128 1.75 8.51579V17.45C1.75 17.8918 2.10817 18.25 2.55 18.25H5.95C6.39183 18.25 6.75 17.8918 6.75 17.45V14.5C6.75 12.7051 8.20507 11.25 10 11.25C11.7949 11.25 13.25 12.7051 13.25 14.5V17.45C13.25 17.8918 13.6082 18.25 14.05 18.25H17.45C17.8918 18.25 18.25 17.8918 18.25 17.45Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

export default Home20;
