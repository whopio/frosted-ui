import * as React from 'react';
import { IconProps } from './types';

export const ConnectionFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="ConnectionFilled20"
      {...props}
    >
      <path
        d="M19.105 12.084c1.189.685 1.189 2.4 0 3.084l-7.733 4.456c-.85.49-1.897.49-2.747-.001L.901 15.168c-1.187-.685-1.187-2.399 0-3.084l2.083-1.203 4.891 2.821c1.314.758 2.931.758 4.245.001l4.899-2.822 2.087 1.203zM8.624.406c.85-.49 1.898-.49 2.748 0l7.733 4.457c1.189.685 1.189 2.4 0 3.085l-7.733 4.455c-.85.49-1.897.49-2.747 0L.901 7.947c-1.186-.685-1.187-2.398 0-3.083L8.623.406z"
        fill={color}
      />
    </svg>
  );
};

ConnectionFilled20.category = 'Interface General';

export default ConnectionFilled20;
