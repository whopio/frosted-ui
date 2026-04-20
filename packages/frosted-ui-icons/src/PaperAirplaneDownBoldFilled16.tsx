import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M5.91309 13.7356C6.79047 15.4245 9.20773 15.4246 10.085 13.7356L14.6924 4.86061C15.8312 2.66633 13.5914 0.253366 11.3184 1.22584L9.00196 2.21803V7.26979C9.00196 7.82207 8.55424 8.26979 8.00196 8.26979C7.44989 8.26953 7.00196 7.82191 7.00196 7.26979V2.21999L4.67774 1.22487C2.4045 0.252807 0.165307 2.66645 1.30469 4.86061L5.91309 13.7356Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBoldFilled16.category = 'Communication';

export default PaperAirplaneDownBoldFilled16;
