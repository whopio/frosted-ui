import * as React from 'react';
import { IconProps } from './types';

export const VolumePlus24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VolumePlus24"
      {...props}
    >
      <path
        d="M9.786 1.682C11.381.18 14 1.312 14 3.502v16.996c0 2.191-2.619 3.322-4.214 1.82L5.78 18.544C5.41 18.195 4.92 18 4.41 18H3.25C1.455 18 0 16.545 0 14.75v-5.5C0 7.455 1.455 6 3.25 6h1.16c.509 0 1-.195 1.37-.544l4.006-3.774zm2.714 1.82c0-.876-1.047-1.328-1.685-.728L6.809 6.548c-.65.611-1.508.952-2.4.952H3.25c-.966 0-1.75.784-1.75 1.75v5.5c0 .966.784 1.75 1.75 1.75h1.16c.891 0 1.75.34 2.399.952l4.006 3.773c.638.601 1.685.15 1.685-.727V3.503zm7.75 4.748c.414 0 .75.336.75.75v2.25h2.25c.414 0 .75.336.75.75s-.336.75-.75.75H21V15c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-2.25h-2.25c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.25V9c0-.414.336-.75.75-.75z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

VolumePlus24.category = 'Sound & Music';

export default VolumePlus24;
