import * as React from 'react';
import { IconProps } from './types';

export const MegaphoneFilled12 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="MegaphoneFilled12"
      {...props}
    >
      <path
        d="M7.802.857C8.912.564 10 1.401 10 2.55V9.45c0 1.149-1.088 1.985-2.198 1.692l-1.925-.51c-.19-.05-.377.093-.377.29v.327c0 .414-.336.75-.75.75S4 11.664 4 11.25V1.863L7.802.857zM2.5 9.738l-.826-.217C.687 9.259 0 8.366 0 7.346V4.654c0-1.02.687-1.913 1.674-2.174l.826-.22v7.478zm9-5.159c.281.338.499.802.499 1.421 0 .618-.218 1.082-.5 1.42V4.58z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

MegaphoneFilled12.category = 'Objects';

export default MegaphoneFilled12;
