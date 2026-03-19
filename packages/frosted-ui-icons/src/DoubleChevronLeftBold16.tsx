import * as React from 'react';
import { IconProps } from './types';

export const DoubleChevronLeftBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.55673 2.70822C8.94723 2.31772 8.94717 1.68469 8.55673 1.29415C8.1662 0.903764 7.53315 0.903676 7.14267 1.29415L1.39951 7.03732C0.867715 7.56944 0.867597 8.43202 1.39951 8.96408L7.14267 14.7072C7.53311 15.0977 8.16619 15.0975 8.55673 14.7072C8.94726 14.3167 8.94726 13.6837 8.55673 13.2932L3.26474 8.00119L8.55673 2.70822ZM14.7052 2.70822C15.0957 2.31773 15.0956 1.68469 14.7052 1.29415C14.3146 0.903629 13.6816 0.903631 13.2911 1.29415L7.54795 7.03732C7.01596 7.56948 7.01585 8.43199 7.54795 8.96408L13.2911 14.7072C13.6816 15.0977 14.3147 15.0976 14.7052 14.7072C15.0957 14.3167 15.0957 13.6837 14.7052 13.2932L9.41318 8.00119L14.7052 2.70822Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

DoubleChevronLeftBold16.category = 'Arrows';

export default DoubleChevronLeftBold16;
