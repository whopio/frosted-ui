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
        d="M10.6416 4.24547C12.1271 4.97945 12.1274 7.09868 10.6416 7.83238L3.35938 11.4281C1.56564 12.3138 -0.35938 10.4843 0.433598 8.64781L1.51075 6.1527C1.54213 6.07988 1.54208 5.99701 1.51075 5.92418L0.433598 3.43004C-0.359859 1.59344 1.56551 -0.236045 3.35938 0.649766L10.6416 4.24547ZM9.97754 6.48668C10.3485 6.30314 10.3485 5.77377 9.97754 5.5902L2.69532 1.99449C2.15298 1.72669 1.57067 2.28007 1.81055 2.83531L2.87012 5.28844L5.12403 5.28844C5.53824 5.28844 5.87403 5.62422 5.87403 6.03844C5.87382 6.45247 5.53811 6.78844 5.12403 6.78844L2.8711 6.78844L1.81055 9.24254C1.571 9.79769 2.15308 10.3511 2.69532 10.0834L9.97754 6.48668Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplane12.category = 'Communication';

export default PaperAirplane12;
