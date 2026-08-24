import * as React from 'react';
import { IconProps } from './types';

export const RoundedArrowAngleRightBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="RoundedArrowAngleRightBoldFilled24"
      {...props}
    >
      <path
        d="M9 23c-4.419 0-8-3.582-8-8s3.582-8 8-8h8.878L14.44 3.56c-.585-.586-.586-1.535 0-2.12.586-.586 1.535-.586 2.121 0l6 6c.281.28.44.662.44 1.06s-.159.779-.44 1.06l-6 6c-.586.586-1.535.586-2.121 0-.585-.585-.586-1.535 0-2.12l3.44-3.44h-8.88c-2.76 0-5 2.239-5 5s2.24 5 5 5h2.09c.829 0 1.5.672 1.5 1.5s-.671 1.5-1.5 1.5H9z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

RoundedArrowAngleRightBoldFilled24.category = 'Arrows';

export default RoundedArrowAngleRightBoldFilled24;
