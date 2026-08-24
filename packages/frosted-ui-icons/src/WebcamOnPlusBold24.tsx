import * as React from 'react';
import { IconProps } from './types';

export const WebcamOnPlusBold24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="WebcamOnPlusBold24"
      {...props}
    >
      <path
        d="M12.25 3.25c2.72 0 4.999 1.89 5.596 4.429l1.764-1.7c1.27-1.223 3.388-.323 3.388 1.44v9.17c0 1.764-2.117 2.665-3.388 1.441l-1.766-1.702c-.6 2.535-2.876 4.422-5.594 4.422h-5.5C3.574 20.75 1 18.176 1 15V9c0-3.176 2.574-5.75 5.75-5.75h5.5zm-5.5 2C4.679 5.25 3 6.929 3 9v6c0 2.071 1.679 3.75 3.75 3.75h5.5c2.071 0 3.75-1.679 3.75-3.75V9c0-2.071-1.679-3.75-3.75-3.75h-5.5zm11.444 4.872c-.06.058-.125.105-.194.145v3.474c.069.04.134.089.194.147l2.804 2.702V7.42l-2.804 2.702zM9.5 7.5c.552 0 1 .448 1 1V11H13c.552 0 1 .448 1 1s-.448 1-1 1h-2.5v2.5c0 .552-.448 1-1 1s-1-.448-1-1V13H6c-.552 0-1-.448-1-1s.448-1 1-1h2.5V8.5c0-.552.448-1 1-1z"
        fill={color}
      />
    </svg>
  );
};

WebcamOnPlusBold24.category = 'Interface General';

export default WebcamOnPlusBold24;
