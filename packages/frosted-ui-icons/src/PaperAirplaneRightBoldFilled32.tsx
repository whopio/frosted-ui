import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneRightBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M28.8945 19.4562C31.7005 18.0049 31.7006 13.9914 28.8945 12.5402L7.59084 1.52362C3.72398 -0.476149 -0.446693 3.63244 1.49514 7.5285L5.22072 15.0002H15.2793C15.8316 15.0002 16.2793 15.4479 16.2793 16.0002C16.2793 16.5524 15.8316 17.0002 15.2793 17.0002H5.21682L1.49318 24.4719C-0.447618 28.3679 3.72249 32.4753 7.58889 30.4758L28.8945 19.4562Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneRightBoldFilled32.category = 'Communication';

export default PaperAirplaneRightBoldFilled32;
