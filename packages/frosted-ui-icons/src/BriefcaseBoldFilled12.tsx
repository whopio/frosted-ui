import * as React from 'react';
import { IconProps } from './types';

export const BriefcaseBoldFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="BriefcaseBoldFilled12"
      {...props}
    >
      <path
        d="M12 8.75C12 10.545 10.545 12 8.75 12h-5.5C1.455 12 0 10.545 0 8.75v-.857C.239 7.96.49 8 .75 8h10.5c.26 0 .511-.04.75-.107v.857zM7 0c1.243 0 2.25 1.007 2.25 2.25v.291c1.447.224 2.578 1.399 2.731 2.867-.072.338-.371.592-.731.592H.75c-.36 0-.66-.254-.732-.592C.17 3.94 1.303 2.765 2.75 2.541V2.25C2.75 1.007 3.757 0 5 0h2zM5 2c-.138 0-.25.112-.25.25v.25h2.5v-.25C7.25 2.112 7.138 2 7 2H5z"
        fill={color}
      />
    </svg>
  );
};

BriefcaseBoldFilled12.category = 'Objects';

export default BriefcaseBoldFilled12;
