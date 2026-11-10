import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpRightBold20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PaperAirplaneUpRightBold20"
      {...props}
    >
      <path
        d="M14.66 1.505C17.056.745 19.312 3 18.552 5.397l-3.869 12.195c-.892 2.812-4.838 2.905-5.862.138l-1.664-4.498c-.057-.153-.177-.273-.33-.33l-4.501-1.666c-2.767-1.024-2.674-4.97.138-5.862l12.196-3.87zm1.986 3.287c.27-.85-.531-1.65-1.381-1.381L3.069 7.28c-.998.316-1.031 1.715-.05 2.079l4.503 1.667.071.028 2.913-2.913c.39-.39 1.023-.39 1.414 0 .39.39.39 1.024 0 1.415L9.006 12.47l.027.067 1.664 4.498c.364.981 1.762.948 2.08-.05l3.869-12.194z"
        fill={color}
      />
    </svg>
  );
};

PaperAirplaneUpRightBold20.category = 'Communication';

export default PaperAirplaneUpRightBold20;
