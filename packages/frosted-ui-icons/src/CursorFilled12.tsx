import * as React from 'react';
import { IconProps } from './types';

export const CursorFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M0.665039 2.7403C0.208 1.45127 1.45121 0.208061 2.74023 0.6651L10.6533 3.47174C12.0106 3.95311 12.1038 5.80922 10.8613 6.44537L10.7363 6.50299L9.37012 7.07233L10.5869 8.28815C11.2215 8.92275 11.2215 9.9524 10.5869 10.587C9.95233 11.2216 8.92269 11.2215 8.28809 10.587L7.07227 9.37018L6.50293 10.7364C5.9305 12.1083 3.96864 12.0546 3.47168 10.6534L0.665039 2.7403Z"
        fill={color}
      />
    </svg>
  );
};

CursorFilled12.category = 'Arrows';

export default CursorFilled12;
