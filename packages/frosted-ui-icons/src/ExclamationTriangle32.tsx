import * as React from 'react';
import { IconProps } from './types';

export const ExclamationTriangle32 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', ...props }, forwardedRef) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-fui-icon="true"
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M16 10C16.4142 10 16.75 10.3358 16.75 10.75V19.25C16.75 19.6642 16.4142 20 16 20C15.5858 20 15.25 19.6642 15.25 19.25V10.75C15.25 10.3358 15.5858 10 16 10Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M17.25 24C17.25 24.6904 16.6904 25.25 16 25.25C15.3096 25.25 14.75 24.6904 14.75 24C14.75 23.3096 15.3096 22.75 16 22.75C16.6904 22.75 17.25 23.3096 17.25 24Z"
          fill={color}
        />
        <path
          d="M16 3.5C15.3374 3.5 14.7245 3.8515 14.3898 4.42343L1.72042 26.0766C1.57608 26.3233 1.5 26.6039 1.5 26.8898C1.5 27.7791 2.22093 28.5 3.11024 28.5H28.8898C29.7791 28.5 30.5 27.7791 30.5 26.8898C30.5 26.6039 30.4239 26.3233 30.2796 26.0766L17.6102 4.42343C17.2755 3.8515 16.6626 3.5 16 3.5ZM13.0951 3.66591C13.6989 2.63412 14.8046 2 16 2C17.1954 2 18.3011 2.63412 18.9049 3.66591L31.5742 25.3191C31.8531 25.7956 32 26.3377 32 26.8898C32 28.6075 30.6075 30 28.8898 30H3.11024C1.3925 30 0 28.6075 0 26.8898C0 26.3377 0.146949 25.7956 0.425754 25.3191L13.0951 3.66591Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  },
);

export default ExclamationTriangle32;
