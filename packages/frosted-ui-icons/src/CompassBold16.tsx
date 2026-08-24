import * as React from 'react';
import { IconProps } from './types';

export const CompassBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CompassBold16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zm0 2C4.962 2.5 2.5 4.962 2.5 8s2.462 5.5 5.5 5.5 5.5-2.462 5.5-5.5S11.038 2.5 8 2.5zm1.453 1.816c1.402-.415 2.718.962 2.185 2.368l-.883 2.33c-.305.802-.939 1.436-1.741 1.74l-2.33.884c-1.451.55-2.872-.87-2.322-2.322l.884-2.329c.305-.802.939-1.436 1.741-1.74l2.33-.885.136-.046zm-1.757 2.8c-.267.102-.478.313-.58.58L6.39 9.61l1.914-.725c.267-.102.48-.314.58-.581L9.61 6.39l-1.914.726z"
        fill={color}
      />
    </svg>
  );
};

CompassBold16.category = 'Interface General';

export default CompassBold16;
