import * as React from 'react';
import { IconProps } from './types';

export const VolumeMinus24 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="VolumeMinus24"
      {...props}
    >
      <path
        d="M9.786 1.682C11.381.18 14 1.312 14 3.502v16.996c0 2.19-2.619 3.322-4.214 1.819L5.78 18.545C5.41 18.195 4.92 18 4.41 18H3.25C1.455 18 0 16.545 0 14.75v-5.5C0 7.455 1.455 6 3.25 6h1.16c.509 0 1-.195 1.37-.544l4.006-3.774zm2.714 1.82c0-.876-1.047-1.328-1.685-.728L6.809 6.547c-.65.612-1.508.953-2.4.953H3.25c-.966 0-1.75.783-1.75 1.75v5.5c0 .966.784 1.75 1.75 1.75h1.16c.891 0 1.75.34 2.399.952l4.006 3.773c.638.601 1.685.15 1.685-.727V3.503zm10.75 7.748c.414 0 .75.336.75.75s-.336.75-.75.75h-5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5z"
        fill={color}
      />
    </svg>
  );
};

VolumeMinus24.category = 'Sound & Music';

export default VolumeMinus24;
