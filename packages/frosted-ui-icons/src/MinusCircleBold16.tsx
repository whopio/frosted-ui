import * as React from 'react';
import { IconProps } from './types';

export const MinusCircleBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MinusCircleBold16"
      {...props}
    >
      <path
        d="M8 .5c4.142 0 7.5 3.358 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5C3.858 15.5.5 12.142.5 8 .5 3.858 3.858.5 8 .5zm0 2C4.962 2.5 2.5 4.962 2.5 8s2.462 5.5 5.5 5.5 5.5-2.462 5.5-5.5S11.038 2.5 8 2.5zm2.688 4.469c.552 0 1 .447 1 1 0 .552-.448 1-1 1H5.25c-.552 0-1-.448-1-1 0-.553.448-1 1-1h5.438z"
        fill={color}
      />
    </svg>
  );
};

MinusCircleBold16.category = 'Interface General';

export default MinusCircleBold16;
