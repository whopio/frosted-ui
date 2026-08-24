import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WebcamOnFilled16"
      {...props}
    >
      <path
        d="M8.25 2.5c1.628 0 3.013 1.038 3.531 2.487l.623-.568C13.4 3.511 15 4.217 15 5.563v4.874c0 1.346-1.6 2.052-2.595 1.144l-.623-.57c-.518 1.45-1.903 2.489-3.531 2.489h-3.5C2.679 13.5 1 11.821 1 9.75v-3.5C1 4.179 2.679 2.5 4.75 2.5h3.5z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnFilled16.category = 'Interface General';

export default WebcamOnFilled16;
