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
          d="M9 7.5C8.58579 7.5 8.25 7.83579 8.25 8.25 8.25 8.66421 8.58579 9 9 9H10.75C11.1643 9 11.5 8.66421 11.5 8.25 11.5 7.83579 11.1643 7.5 10.75 7.5H9zM7.73014 6.67383C8.04835 6.93901 8.09134 7.41193 7.82617 7.73014L6.57617 9.23014C6.44127 9.39202 6.24449 9.48968 6.03399 9.49923 5.82348 9.50878 5.61867 9.42933 5.46967 9.28033L4.71967 8.53033C4.42678 8.23744 4.42678 7.76256 4.71967 7.46967 5.01256 7.17678 5.48744 7.17678 5.78033 7.46967L5.9496 7.63894 6.67383 6.76986C6.93901 6.45165 7.41193 6.40866 7.73014 6.67383zM9 11C8.58579 11 8.25 11.3358 8.25 11.75 8.25 12.1642 8.58579 12.5 9 12.5H10.75C11.1643 12.5 11.5 12.1642 11.5 11.75 11.5 11.3358 11.1643 11 10.75 11H9zM7.73014 10.1738C8.04835 10.439 8.09134 10.9119 7.82617 11.2301L6.57617 12.7301C6.44127 12.892 6.24449 12.9897 6.03399 12.9992 5.82348 13.0088 5.61867 12.9293 5.46967 12.7803L4.71967 12.0303C4.42678 11.7374 4.42678 11.2626 4.71967 10.9697 5.01256 10.6768 5.48744 10.6768 5.78033 10.9697L5.9496 11.1389 6.67383 10.2699C6.93901 9.95165 7.41193 9.90866 7.73014 10.1738z"
          fill={color}
        />
        <path
          d="M7.64798 0.5C7.22265 0.5 6.8265 0.716275 6.5965 1.07405L6.32268 1.5H5.50049C4.89651 1.5 4.39099 1.92884 4.27501 2.5H4C2.89543 2.5 2 3.39543 2 4.5V14C2 15.1046 2.89543 16 4 16H12C13.1046 16 14 15.1046 14 14V4.5C14 3.39543 13.1046 2.5 12 2.5H11.725C11.609 1.92884 11.1035 1.5 10.4995 1.5H9.67732L9.4035 1.07405C9.1735 0.716275 8.77735 0.5 8.35202 0.5H7.64798ZM7.37854 2.63143L7.78446 2H8.21554L8.62146 2.63143C8.7563 2.85974 9.0018 3 9.26722 3H10.25V4H5.75V3H6.73278C6.9982 3 7.2437 2.85973 7.37854 2.63143ZM12.5 4.5C12.5 4.22386 12.2761 4 12 4H11.75V4.25C11.75 4.94036 11.1904 5.5 10.5 5.5H5.5C4.80964 5.5 4.25 4.94036 4.25 4.25V4H4C3.72386 4 3.5 4.22386 3.5 4.5V14C3.5 14.2761 3.72386 14.5 4 14.5H12C12.2761 14.5 12.5 14.2761 12.5 14V4.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default Checklist16;
