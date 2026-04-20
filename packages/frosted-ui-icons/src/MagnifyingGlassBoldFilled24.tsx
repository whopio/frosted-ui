import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.0029 0.751953C15.1114 0.752187 19.2529 4.89346 19.2529 10.002C19.2529 12.0146 18.6071 13.8753 17.5156 15.3936L22.8115 20.6885C23.3971 21.2742 23.3971 22.2248 22.8115 22.8105C22.2258 23.3963 21.2752 23.3962 20.6895 22.8105L15.3945 17.5146C13.8763 18.6062 12.0156 19.2519 10.0029 19.252C4.89435 19.252 0.753019 15.1105 0.75293 10.002C0.75293 4.89332 4.8943 0.751953 10.0029 0.751953ZM10.0029 3.75195C6.55115 3.75195 3.75293 6.55017 3.75293 10.002C3.75302 13.4537 6.5512 16.252 10.0029 16.252C13.4545 16.2517 16.2528 13.4535 16.2529 10.002C16.2529 6.55032 13.4545 3.75219 10.0029 3.75195Z"
        fill={color}
      />
    </svg>
  );
};

MagnifyingGlassBoldFilled24.category = 'Interface General';

export default MagnifyingGlassBoldFilled24;
