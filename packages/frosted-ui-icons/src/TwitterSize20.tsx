import * as React from 'react';
import { IconProps } from './types';

export const TwitterSize20 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M4.46484 11.5363C4.31641 11.6013 3.78763 11.6602 3.4375 11.6602C3.28203 11.6602 3.13439 11.6543 2.98801 11.639C2.87001 11.6267 2.77317 11.7387 2.8178 11.8486C3.37616 13.2238 4.73123 14.2024 6.32118 14.23C5.00408 15.246 3.3451 15.8516 1.54326 15.8516C1.46488 15.8516 1.38676 15.8504 1.30892 15.8482C1.14278 15.8433 1.07015 16.0669 1.21593 16.1468C2.78784 17.0079 4.59535 17.5 6.52102 17.5C13.5979 17.5 17.4667 11.7305 17.4667 6.72673C17.4667 6.56416 17.4625 6.39997 17.4551 6.2374C18.2065 5.70256 18.8589 5.03685 19.3733 4.27848V4.27848C19.3738 4.27777 19.3731 4.27688 19.3723 4.27722C18.7709 4.53926 18.1305 4.72712 17.4601 4.83162C17.3933 4.84203 17.3603 4.75019 17.4157 4.71148C17.9765 4.31996 18.4265 3.784 18.7092 3.15868C18.7683 3.02785 18.6254 2.90802 18.4978 2.97379C17.8516 3.30676 17.1518 3.5526 16.4146 3.69487C15.7127 2.96007 14.7135 2.5 13.607 2.5C11.4831 2.5 9.7605 4.19557 9.7605 6.2878C9.7605 6.58367 9.79525 6.87141 9.85958 7.1494C6.74118 6.99485 3.96975 5.55748 2.0743 3.36248C2.00352 3.28052 1.87267 3.29115 1.82326 3.38751C1.55945 3.90201 1.41031 4.4825 1.41031 5.09618C1.41031 6.40973 2.08992 7.56963 3.12131 8.24835C2.50776 8.22858 1.93014 8.06737 1.42186 7.7976C1.40246 7.7873 1.37893 7.80127 1.37893 7.82323V7.82323C1.37893 9.64342 2.68355 11.1643 4.42342 11.5278M4.46484 11.5363C4.45101 11.5335 4.4372 11.5307 4.42342 11.5278M4.46484 11.5363L4.42342 11.5278"
          stroke={color}
          strokeWidth="1.3"
        />
      </svg>
    );
  },
);

export default TwitterSize20;
