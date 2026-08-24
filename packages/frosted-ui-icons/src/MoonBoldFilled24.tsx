import * as React from 'react';
import { IconProps } from './types';

export const MoonBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MoonBoldFilled24"
      {...props}
    >
      <path
        d="M12 .5c.141 0 .222.163.144.282-.828 1.259-1.31 2.765-1.31 4.385 0 4.418 3.582 8 8 8 1.62 0 3.125-.483 4.384-1.31.118-.078.282.002.282.143 0 6.351-5.149 11.5-11.5 11.5S.5 18.351.5 12 5.649.5 12 .5z"
        fill={color}
      />
    </svg>
  );
};

MoonBoldFilled24.category = 'Nature & Weather';

export default MoonBoldFilled24;
