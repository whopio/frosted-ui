import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneUpBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.91309 2.27013C6.79047 0.581221 9.20773 0.581142 10.085 2.27013L14.6924 11.1451C15.8312 13.3394 13.5914 15.7524 11.3184 14.7799L8.08301 13.3951C8.03012 13.3727 7.96986 13.3726 7.91699 13.3951L4.67774 14.7809C2.40449 15.7529 0.165307 13.3393 1.30469 11.1451L5.91309 2.27013ZM8.30957 3.192C8.17884 2.94087 7.81924 2.9409 7.68848 3.192L3.08008 12.067C2.80603 12.5948 3.34385 13.1754 3.89063 12.942L7.00196 11.6109V8.73595C7.00196 8.18382 7.44989 7.73621 8.00196 7.73595C8.55424 7.73595 9.00196 8.18366 9.00196 8.73595V11.6119L12.1055 12.941C12.6523 13.1749 13.1911 12.5939 12.917 12.066L8.30957 3.192Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneUpBold16.category = 'Communication';

export default PaperAirplaneUpBold16;
