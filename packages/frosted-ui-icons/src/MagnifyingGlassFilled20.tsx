import * as React from 'react';
import { IconProps } from './types';

export const MagnifyingGlassFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M8.49707 0.99707C12.6391 0.99707 15.9968 4.35512 15.9971 8.49707C15.9971 10.1167 15.4813 11.6149 14.6084 12.8408L18.6348 16.8672C19.1226 17.3554 19.1228 18.1467 18.6348 18.6348C18.1467 19.1228 17.3554 19.1226 16.8672 18.6348L12.8408 14.6084C11.6149 15.4813 10.1167 15.9971 8.49707 15.9971C4.35512 15.9968 0.99707 12.6391 0.99707 8.49707C0.997293 4.35526 4.35526 0.997293 8.49707 0.99707ZM8.49707 3.49707C5.73597 3.49729 3.49729 5.73597 3.49707 8.49707C3.49707 11.2584 5.73584 13.4968 8.49707 13.4971C11.2585 13.4971 13.4971 11.2585 13.4971 8.49707C13.4968 5.73584 11.2584 3.49707 8.49707 3.49707Z"
        fill={color}
      />
    </svg>
  );
};

MagnifyingGlassFilled20.category = 'Product Icons';

export default MagnifyingGlassFilled20;
