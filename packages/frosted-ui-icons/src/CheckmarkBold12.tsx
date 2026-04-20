import * as React from 'react';
import { IconProps } from './types';

export const CheckmarkBold12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M10.292 2.04224C10.6824 1.65182 11.3165 1.65203 11.707 2.04224C12.0976 2.43276 12.0976 3.06675 11.707 3.45728L4.70703 10.4563C4.51958 10.6437 4.26508 10.7501 4 10.7502C3.73489 10.7502 3.48044 10.6438 3.29297 10.4563L0.292969 7.45728C-0.097524 7.06678 -0.097461 6.43374 0.292969 6.04321C0.683493 5.65269 1.31651 5.65269 1.70703 6.04321L4 8.33521L10.292 2.04224Z"
        fill={color}
      />
    </svg>
  );
};

CheckmarkBold12.category = 'Checkmarks';

export default CheckmarkBold12;
