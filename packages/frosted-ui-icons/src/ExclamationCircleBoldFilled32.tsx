import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircleBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M16 0.5C24.5604 0.5 31.5 7.43959 31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.5 24.5604 0.5 16C0.5 7.43959 7.43959 0.5 16 0.5ZM15.999 21.125C15.2396 21.125 14.624 21.7406 14.624 22.5V22.5254C14.6242 23.2846 15.2398 23.9004 15.999 23.9004C16.7583 23.9004 17.3738 23.2846 17.374 22.5254V22.5C17.374 21.7406 16.7584 21.125 15.999 21.125ZM15.999 7.39941C15.4467 7.39941 14.999 7.84713 14.999 8.39941V17.583C14.999 18.1353 15.4467 18.583 15.999 18.583C16.5513 18.583 16.999 18.1353 16.999 17.583V8.39941C16.999 7.84713 16.5513 7.39941 15.999 7.39941Z"
        fill={color}
      />
    </svg>
  );
};

ExclamationCircleBoldFilled32.category = 'Interface General';

export default ExclamationCircleBoldFilled32;
