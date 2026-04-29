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
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12 0.5C12.1414 0.5 12.2216 0.663364 12.144 0.781538C11.3164 2.04096 10.8341 3.54741 10.834 5.16699C10.834 9.58527 14.4157 13.167 18.834 13.167C20.4535 13.167 21.959 12.6839 23.2183 11.8565C23.3361 11.779 23.5 11.859 23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5Z"
        fill={color}
      />
    </svg>
  );
};

MoonBoldFilled24.category = 'Nature & Weather';

export default MoonBoldFilled24;
