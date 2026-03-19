import * as React from 'react';
import { IconProps } from './types';

export const BellBoldFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M9.9999 1C12.7337 1.0001 14.4646 2.27296 15.4979 3.8291C16.4936 5.32881 16.823 7.05213 16.9364 8.0459C16.9864 8.48365 17.1068 8.85815 17.2997 9.14746L17.7226 9.78125C18.6181 11.1248 18.6181 12.8752 17.7226 14.2188C16.9808 15.3314 15.7317 15.9999 14.3944 16H13.8895C13.7047 16.8156 13.2945 17.4921 12.7265 17.9971C11.9585 18.6797 10.9629 18.9999 9.9999 19C9.03691 19 8.04134 18.6796 7.27334 17.9971C6.70522 17.4921 6.29513 16.8157 6.11025 16H5.60537C4.26805 16 3.0191 15.3314 2.27724 14.2188C1.38154 12.8752 1.38154 11.1248 2.27724 9.78125L2.70009 9.14746C2.89292 8.85816 3.01342 8.48359 3.06338 8.0459C3.17685 7.05209 3.50608 5.32883 4.50185 3.8291C5.53525 2.27296 7.26604 1.00001 9.9999 1Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

BellBoldFilled20.category = 'Product Icons';

export default BellBoldFilled20;
