import * as React from 'react';
import { IconProps } from './types';

export const Checklist16 = React.forwardRef<SVGSVGElement, IconProps>(
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
          d="M4 4C3.72386 4 3.5 4.22386 3.5 4.5V14C3.5 14.2761 3.72386 14.5 4 14.5H12C12.2761 14.5 12.5 14.2761 12.5 14V4.5C12.5 4.22386 12.2761 4 12 4H11.0625C10.6483 4 10.3125 3.66421 10.3125 3.25C10.3125 2.83579 10.6483 2.5 11.0625 2.5H12C13.1046 2.5 14 3.39543 14 4.5V14C14 15.1046 13.1046 16 12 16H4C2.89543 16 2 15.1046 2 14V4.5C2 3.39543 2.89543 2.5 4 2.5H4.9375C5.35171 2.5 5.6875 2.83579 5.6875 3.25C5.6875 3.66421 5.35171 4 4.9375 4H4Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M8.25 8.25C8.25 7.83579 8.58579 7.5 9 7.5H10.75C11.1643 7.5 11.5 7.83579 11.5 8.25 11.5 8.66421 11.1643 9 10.75 9H9C8.58579 9 8.25 8.66421 8.25 8.25zM7.73014 6.67383C8.04835 6.93901 8.09134 7.41193 7.82617 7.73014L6.57617 9.23014C6.44127 9.39202 6.24449 9.48968 6.03399 9.49923 5.82348 9.50878 5.61867 9.42933 5.46967 9.28033L4.71967 8.53033C4.42678 8.23744 4.42678 7.76256 4.71967 7.46967 5.01256 7.17678 5.48744 7.17678 5.78033 7.46967L5.9496 7.63894 6.67383 6.76986C6.93901 6.45165 7.41193 6.40866 7.73014 6.67383zM8.25 11.75C8.25 11.3358 8.58579 11 9 11H10.75C11.1643 11 11.5 11.3358 11.5 11.75 11.5 12.1642 11.1643 12.5 10.75 12.5H9C8.58579 12.5 8.25 12.1642 8.25 11.75zM7.73014 10.1738C8.04835 10.439 8.09134 10.9119 7.82617 11.2301L6.57617 12.7301C6.44127 12.892 6.24449 12.9897 6.03399 12.9992 5.82348 13.0088 5.61867 12.9293 5.46967 12.7803L4.71967 12.0303C4.42678 11.7374 4.42678 11.2626 4.71967 10.9697 5.01256 10.6768 5.48744 10.6768 5.78033 10.9697L5.9496 11.1389 6.67383 10.2699C6.93901 9.95165 7.41193 9.90866 7.73014 10.1738zM7.78446 2L7.37854 2.63143C7.2437 2.85973 6.9982 3 6.73278 3H5.75V4H10.25V3H9.26722C9.0018 3 8.7563 2.85974 8.62146 2.63143L8.21554 2H7.78446zM6.5965 1.07405C6.8265.716275 7.22265.5 7.64798.5H8.35202C8.77735.5 9.1735.716275 9.4035 1.07405L9.67732 1.5H10.4995C11.1889 1.5 11.75 2.05868 11.75 2.75V4.25C11.75 4.94036 11.1904 5.5 10.5 5.5H5.5C4.80964 5.5 4.25 4.94036 4.25 4.25V2.75C4.25 2.05868 4.81111 1.5 5.50049 1.5H6.32268L6.5965 1.07405z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Checklist16;