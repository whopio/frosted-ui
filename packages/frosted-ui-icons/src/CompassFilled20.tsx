import * as React from 'react';
import { IconProps } from './types';

export const CompassFilled20 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CompassFilled20"
      {...props}
    >
      <path
        d="M10 .5c5.247 0 9.5 4.253 9.5 9.5s-4.253 9.5-9.5 9.5S.5 15.247.5 10 4.753.5 10 .5zm3.05 4.97l-.189.055-4.16 1.58c-.737.279-1.317.86-1.597 1.595l-1.579 4.161c-.382 1.008.605 1.995 1.613 1.613l4.16-1.579c.737-.279 1.318-.86 1.598-1.596l1.578-4.161c.357-.945-.487-1.871-1.424-1.668zM10 8.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"
        fill={color}
      />
    </svg>
  );
};

CompassFilled20.category = 'Interface General';

export default CompassFilled20;
