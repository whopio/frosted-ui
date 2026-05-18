import * as React from 'react';
import { IconProps } from './types';

export const ShieldHalfFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M11.1035 0.323518C11.741 0.0808182 12.4461 0.0836784 13.082 0.330354L20.7402 3.30106C21.8009 3.71274 22.4999 4.73356 22.5 5.87137V13.2102C22.4996 16.3389 20.2119 18.876 17.9766 20.6282C15.7041 22.4095 13.271 23.5489 12.5811 23.8557C12.2678 23.9949 11.9221 23.9959 11.6074 23.8587C10.9101 23.5545 8.43067 22.4168 6.11426 20.636C3.83819 18.8862 1.50037 16.3474 1.5 13.2102V5.88113C1.5 4.73685 2.20702 3.71123 3.27637 3.30399L11.1035 0.323518ZM12.75 22.1145C13.7715 21.6101 15.46 20.6944 17.0508 19.4475C19.2182 17.7486 20.9996 15.6018 21 13.2102V5.87137C20.9999 5.35249 20.681 4.88718 20.1973 4.69949L12.75 1.80985V22.1145Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldHalfFilled24.category = 'Security';

export default ShieldHalfFilled24;
