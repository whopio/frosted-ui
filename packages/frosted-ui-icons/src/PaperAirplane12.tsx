import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplane12 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M10.6411 4.24547C12.1266 4.97945 12.1269 7.09868 10.6411 7.83238L3.35889 11.4281C1.56515 12.3138 -0.359868 10.4843 0.433109 8.64781L1.51026 6.1527C1.54164 6.07988 1.54159 5.99701 1.51026 5.92418L0.433109 3.43004C-0.360348 1.59344 1.56502 -0.236045 3.35889 0.649766L10.6411 4.24547ZM9.97705 6.48668C10.348 6.30314 10.348 5.77377 9.97705 5.5902L2.69483 1.99449C2.15249 1.72669 1.57018 2.28007 1.81006 2.83531L2.86963 5.28844L5.12354 5.28844C5.53775 5.28844 5.87354 5.62422 5.87354 6.03844C5.87333 6.45247 5.53762 6.78844 5.12354 6.78844L2.87061 6.78844L1.81006 9.24254C1.57051 9.79769 2.15259 10.3511 2.69483 10.0834L9.97705 6.48668Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplane12.category = 'Communication';

export default PaperAirplane12;
