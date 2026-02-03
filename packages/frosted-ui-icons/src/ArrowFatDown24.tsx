import * as React from 'react';
import { IconProps } from './types';

export const ArrowFatDown24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M14.2495 2C15.216 2.00006 15.9995 2.78355 15.9995 3.75V13H18.6597C19.7288 13.0002 20.3041 14.2553 19.6069 15.0654L13.3257 22.3594C12.6276 23.1698 11.3725 23.1699 10.6743 22.3594L4.39307 15.0654C3.69561 14.2552 4.27107 13 5.34033 13H7.99951V3.75C7.99951 2.78364 8.7832 2.00023 9.74951 2H14.2495ZM9.74951 3.5C9.61163 3.50023 9.49951 3.61207 9.49951 3.75V13.75C9.49951 14.1642 9.16368 14.4999 8.74951 14.5H5.88525L11.8101 21.3809H11.811C11.9106 21.4961 12.0892 21.4963 12.189 21.3809L18.1147 14.5H15.2495C14.8355 14.4998 14.4995 14.1641 14.4995 13.75V3.75C14.4995 3.61196 14.3875 3.50006 14.2495 3.5H9.74951Z"
        fill={color}
      />
    </svg>
  );
};

ArrowFatDown24.category = 'Arrows';

export default ArrowFatDown24;
