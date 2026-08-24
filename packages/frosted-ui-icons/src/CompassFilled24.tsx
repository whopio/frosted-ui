import * as React from 'react';
import { IconProps } from './types';

export const CompassFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CompassFilled24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zm5.229 8.013c.4-1.055-.588-2.088-1.64-1.776l-.102.034-5.162 1.958c-.735.28-1.316.86-1.596 1.596l-1.958 5.162c-.412 1.089.654 2.154 1.742 1.742l5.162-1.958c.735-.28 1.316-.86 1.595-1.596l1.959-5.162zM12 10.25c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75-1.75-.784-1.75-1.75.784-1.75 1.75-1.75z"
        fill={color}
      />
    </svg>
  );
};

CompassFilled24.category = 'Interface General';

export default CompassFilled24;
