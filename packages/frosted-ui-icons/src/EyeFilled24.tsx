import * as React from 'react';
import { IconProps } from './types';

export const EyeFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="EyeFilled24"
      {...props}
    >
      <path
        d="M12 3c3.89 0 6.812 2.058 8.762 4.118 1.95 2.06 2.998 4.192 3.155 4.524.042.088.082.21.082.357 0 .149-.04.271-.082.359-.158.334-1.206 2.466-3.155 4.525C18.812 18.943 15.889 21 12 21c-3.89 0-6.813-2.057-8.762-4.117-1.95-2.06-2.997-4.191-3.155-4.525-.041-.088-.082-.21-.082-.359 0-.147.04-.27.082-.357l.1-.205c.333-.659 1.348-2.517 3.055-4.32C5.188 5.059 8.11 3.002 12 3zm0 4C9.24 7 7 9.24 7 12c0 2.762 2.239 5 5 5s5-2.238 5-5c0-2.76-2.238-5-5-5zm0 1.5c1.933 0 3.5 1.568 3.5 3.5 0 1.933-1.567 3.5-3.5 3.5S8.5 13.934 8.5 12c0-1.932 1.567-3.5 3.5-3.5z"
        fill={color}
      />
    </svg>
  );
};

EyeFilled24.category = 'Accessibility';

export default EyeFilled24;
