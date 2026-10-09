import * as React from 'react';
import { IconProps } from './types';

export const InboxBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="InboxBoldFilled12"
      {...props}
    >
      <path
        d="M8.331.25c1.45 0 2.692 1.037 2.951 2.463l.637 3.504c.053.295.081.594.081.893v1.64c0 1.657-1.343 3-3 3H3c-1.657 0-3-1.343-3-3V7.11c0-.3.027-.598.081-.893l.637-3.504C.978 1.287 2.219.25 3.669.25h4.662zm-4.662 2c-.483 0-.897.346-.983.821L2.198 5.75H4.25c.488 0 .904.352.985.833v-.004l.001.004c.004.016.012.046.025.085.027.081.07.183.134.277.107.162.26.305.605.305s.498-.143.605-.305c.063-.094.107-.196.134-.277.013-.039.02-.069.025-.085.081-.48.498-.833.986-.833h2.052l-.488-2.679c-.086-.475-.5-.82-.983-.821H3.669z"
        fill={color}
      />
    </svg>
  );
};

InboxBoldFilled12.category = 'Interface General';

export default InboxBoldFilled12;
