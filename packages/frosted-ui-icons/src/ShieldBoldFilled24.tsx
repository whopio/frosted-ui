import * as React from 'react';
import { IconProps } from './types';

export const ShieldBoldFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.9756 1.20705C11.6873 0.928085 12.4795 0.931331 13.1895 1.21486L19.6094 3.77834C20.7518 4.23466 21.5008 5.34116 21.501 6.57131V13.0322C21.5009 15.9636 19.4406 18.309 17.4883 19.8965C15.4934 21.5185 13.3496 22.5629 12.6914 22.8662C12.3051 23.0442 11.8648 23.047 11.4756 22.8711C10.8105 22.5705 8.6276 21.5272 6.59473 19.9063C4.60772 18.3219 2.50005 15.9744 2.5 13.0322V6.58107C2.50001 5.3437 3.25811 4.23282 4.41016 3.78127L10.9756 1.20705Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldBoldFilled24.category = 'Security';

export default ShieldBoldFilled24;
