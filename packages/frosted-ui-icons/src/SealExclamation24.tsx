import * as React from 'react';
import { IconProps } from './types';

export const SealExclamation24 = React.forwardRef<SVGSVGElement, IconProps>(
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
        <g clipPath="url(#clip0_1057_1064)">
          <path
            d="M20.7325 8.38289L20.0025 8.21082C19.9285 8.52485 20.0636 8.85103 20.338 9.02074L20.7325 8.38289ZM15.6171 3.26752L14.9793 3.66203C15.149 3.93642 15.4751 4.07153 15.7892 3.99751L15.6171 3.26752ZM8.38287 3.26752L8.21081 3.99751C8.52484 4.07153 8.85101 3.93642 9.02072 3.66203L8.38287 3.26752ZM4.39858 4.3986L4.92891 4.92893V4.92893L4.39858 4.3986ZM3.2675 8.3829L3.66202 9.02074C3.93641 8.85103 4.07151 8.52486 3.99749 8.21083L3.2675 8.3829ZM3.26751 15.6171L3.99751 15.7892C4.07153 15.4751 3.93642 15.149 3.66203 14.9793L3.26751 15.6171ZM4.3986 19.6014L3.86827 20.1317H3.86827L4.3986 19.6014ZM8.38288 20.7325L9.02073 20.338C8.85102 20.0636 8.52485 19.9285 8.21082 20.0025L8.38288 20.7325ZM15.6171 20.7325L15.7892 20.0025C15.4751 19.9285 15.149 20.0636 14.9793 20.338L15.6171 20.7325ZM19.6014 19.6014L20.1317 20.1317L20.1317 20.1317L19.6014 19.6014ZM20.7325 15.6171L20.3379 14.9793C20.0636 15.149 19.9285 15.4751 20.0025 15.7892L20.7325 15.6171ZM20.338 9.02074C21.3371 9.63869 22 10.7422 22 12H23.5C23.5 10.2011 22.5495 8.6249 21.127 7.74504L20.338 9.02074ZM19.0711 4.92893C19.9604 5.8183 20.272 7.06739 20.0025 8.21082L21.4625 8.55495C21.8462 6.9269 21.4037 5.14026 20.1317 3.86827L19.0711 4.92893ZM15.7892 3.99751C16.9326 3.728 18.1817 4.03956 19.0711 4.92893L20.1317 3.86827C18.8597 2.59628 17.0731 2.15378 15.445 2.53752L15.7892 3.99751ZM12 2C13.2577 2 14.3613 2.66294 14.9793 3.66203L16.255 2.873C15.3751 1.45046 13.7989 0.5 12 0.5V2ZM9.02072 3.66203C9.63868 2.66294 10.7422 2 12 2V0.5C10.2011 0.5 8.62488 1.45045 7.74502 2.873L9.02072 3.66203ZM4.92891 4.92893C5.81829 4.03956 7.06738 3.728 8.21081 3.99751L8.55493 2.53752C6.92689 2.15378 5.14024 2.59628 3.86825 3.86827L4.92891 4.92893ZM3.99749 8.21083C3.72798 7.0674 4.03954 5.81831 4.92891 4.92893L3.86825 3.86827C2.59626 5.14026 2.15377 6.92691 2.5375 8.55496L3.99749 8.21083ZM2 12C2 10.7422 2.66293 9.6387 3.66202 9.02074L2.87297 7.74505C1.45045 8.62491 0.5 10.2011 0.5 12H2ZM3.66203 14.9793C2.66294 14.3613 2 13.2578 2 12H0.5C0.5 13.7989 1.45045 15.3751 2.87299 16.255L3.66203 14.9793ZM4.92893 19.0711C4.03956 18.1817 3.728 16.9326 3.99751 15.7892L2.53752 15.4451C2.15379 17.0731 2.59629 18.8597 3.86827 20.1317L4.92893 19.0711ZM8.21082 20.0025C7.06739 20.272 5.8183 19.9604 4.92893 19.0711L3.86827 20.1317C5.14026 21.4037 6.9269 21.8462 8.55494 21.4625L8.21082 20.0025ZM12 22C10.7422 22 9.63869 21.3371 9.02073 20.338L7.74503 21.127C8.62489 22.5495 10.2011 23.5 12 23.5V22ZM14.9793 20.338C14.3613 21.3371 13.2577 22 12 22V23.5C13.7989 23.5 15.3751 22.5495 16.255 21.127L14.9793 20.338ZM19.0711 19.0711C18.1817 19.9604 16.9326 20.272 15.7892 20.0025L15.445 21.4625C17.0731 21.8462 18.8597 21.4037 20.1317 20.1317L19.0711 19.0711ZM20.0025 15.7892C20.272 16.9326 19.9604 18.1817 19.071 19.0711L20.1317 20.1317C21.4037 18.8597 21.8462 17.0731 21.4625 15.4451L20.0025 15.7892ZM22 12C22 13.2578 21.3371 14.3613 20.3379 14.9793L21.127 16.255C22.5495 15.3751 23.5 13.7989 23.5 12H22Z"
            fill={color}
          />
          <path
            d="M12 6.75L12 12.25"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="16" r="1" fill={color} />
        </g>
        <defs>
          <clipPath id="clip0_1057_1064">
            <path fill={color} d="M0 0H24V24H0z" />
          </clipPath>
        </defs>
      </svg>
    );
  },
);

export default SealExclamation24;