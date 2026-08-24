import * as React from 'react';
import { IconProps } from './types';

export const ThumbDown24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ThumbDown24"
      {...props}
    >
      <path
        d="M11.611 21c1.685 0 2.982-1.504 2.722-3.174L13.892 15h4.367c2.296 0 4.052-2.045 3.707-4.315l-.837-5.5C20.85 3.355 19.275 2 17.422 2H3.75C2.784 2 2 2.783 2 3.75v7.5c0 .966.784 1.75 1.75 1.75h2.67l3.634 7.052c.3.583.903.948 1.557.948zM3.75 11.5c-.138 0-.25-.112-.25-.25v-7.5c0-.138.112-.25.25-.25H6v8H3.75zm7.861 8c-.094 0-.181-.054-.223-.136L7.5 11.818V3.5h9.922c1.112 0 2.057.812 2.224 1.911l.837 5.5c.208 1.362-.847 2.589-2.224 2.589h-5.243c-.22 0-.427.096-.57.263-.142.166-.204.386-.17.602l.575 3.693c.117.755-.47 1.442-1.24 1.442z"
        fill={color}
      />
    </svg>
  );
};

ThumbDown24.category = 'Interface General';

export default ThumbDown24;
