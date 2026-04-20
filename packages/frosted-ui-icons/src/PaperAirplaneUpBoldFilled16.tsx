import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.91309 2.27013C6.79047 0.58122 9.20773 0.581143 10.085 2.27013L14.6924 11.1451C15.8312 13.3394 13.5914 15.7524 11.3184 14.7799L9.00196 13.7877V8.73595C9.00196 8.18366 8.55424 7.73595 8.00196 7.73595C7.44989 7.73621 7.00196 8.18382 7.00196 8.73595V13.7858L4.67774 14.7809C2.4045 15.7529 0.165307 13.3393 1.30469 11.1451L5.91309 2.27013Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpBoldFilled16.category = 'Communication';

export default PaperAirplaneUpBoldFilled16;
