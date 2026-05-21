import * as React from 'react';
import { IconProps } from './types';

export const StarFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M6.92301 1.11568C7.43768 0.372248 8.57045 0.372249 9.08512 1.11568L9.18571 1.28658L10.9005 4.75923L14.8576 5.26411C15.9255 5.4004 16.4264 6.72791 15.5841 7.50044L12.7062 10.1391L13.4279 13.9038C13.643 15.0275 12.4429 15.7735 11.5197 15.2895L8.00406 13.4458L4.48844 15.2895C3.56533 15.7734 2.36517 15.0276 2.58024 13.9038L3.30094 10.1391L0.423986 7.50044C-0.41817 6.72791 0.0826768 5.40043 1.15055 5.26411L5.1066 4.75923L6.82242 1.28658L6.92301 1.11568Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

StarFilled16.category = 'Interface General';

export default StarFilled16;
