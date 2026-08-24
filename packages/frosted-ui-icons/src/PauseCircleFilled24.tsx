import * as React from 'react';
import { IconProps } from './types';

export const PauseCircleFilled24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="PauseCircleFilled24"
      {...props}
    >
      <path
        d="M12 .5C18.351.5 23.5 5.649 23.5 12S18.351 23.5 12 23.5.5 18.351.5 12 5.649.5 12 .5zM8 7c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h1c.552 0 1-.448 1-1V8c0-.552-.448-1-1-1H8zm7 0c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h1c.552 0 1-.448 1-1V8c0-.552-.448-1-1-1h-1z"
        fill={color}
      />
    </svg>
  );
};

PauseCircleFilled24.category = 'Sound & Music';

export default PauseCircleFilled24;
