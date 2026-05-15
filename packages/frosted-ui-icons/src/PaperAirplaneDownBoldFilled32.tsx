import * as React from 'react';
import { IconProps } from './types';

export const PaperAirplaneDownBoldFilled32 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.5425 28.8934C13.9939 31.6993 18.0074 31.6994 19.4586 28.8934L30.4752 7.58968C32.4749 3.72282 28.3663 -0.447853 24.4703 1.49398L16.9986 5.21956V15.2782C16.9986 15.8304 16.5509 16.2782 15.9986 16.2782C15.4463 16.2781 14.9986 15.8304 14.9986 15.2782V5.21566L7.52692 1.49202C3.6309 -0.448778 -0.476539 3.72133 1.52301 7.58773L12.5425 28.8934Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

PaperAirplaneDownBoldFilled32.category = 'Communication';

export default PaperAirplaneDownBoldFilled32;
