import * as React from 'react';
import { IconProps } from './types';

export const ReceptionBellFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.5241 1C12.938 1.00026 13.2739 1.33612 13.2741 1.75C13.2741 2.16405 12.9381 2.49974 12.5241 2.5H10.7517V4.02148C13.9555 4.20487 16.0118 5.57113 17.2595 7.52441C18.5623 9.5642 18.9226 12.1493 18.989 14.3945C19.0155 15.2924 18.2852 15.9998 17.4177 16H10.7517V17.499H17.2507C17.6645 17.4992 18.0003 17.8353 18.0007 18.249C18.0007 18.6631 17.6647 18.9988 17.2507 18.999H2.75168C2.33746 18.999 2.00168 18.6632 2.00168 18.249C2.0021 17.8352 2.33773 17.499 2.75168 17.499H9.25168V16H2.58469C1.71716 15.9998 0.98785 15.2924 1.01437 14.3945C1.0808 12.1492 1.44098 9.56423 2.74387 7.52441C3.99167 5.57113 6.04752 4.20465 9.25168 4.02148V2.5H7.47922C7.065 2.5 6.72922 2.16421 6.72922 1.75C6.72941 1.33595 7.06513 1 7.47922 1H12.5241Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ReceptionBellFilled20.category = 'Objects';

export default ReceptionBellFilled20;
