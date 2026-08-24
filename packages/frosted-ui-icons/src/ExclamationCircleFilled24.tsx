import * as React from 'react';
import { IconProps } from './types';

export const ExclamationCircleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ExclamationCircleFilled24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm0 15.375c-.621 0-1.125.504-1.125 1.125v.02l.006.115c.057.567.536 1.01 1.119 1.01.621 0 1.125-.504 1.125-1.125V17c0-.621-.504-1.125-1.125-1.125zM12 5.25c-.414 0-.75.336-.75.75v7c0 .414.336.75.75.75s.75-.336.75-.75V6c0-.414-.336-.75-.75-.75z"
        fill={color}
      />
    </svg>
  );
};

ExclamationCircleFilled24.category = 'Interface General';

export default ExclamationCircleFilled24;
