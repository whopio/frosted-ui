import * as React from 'react';
import { IconProps } from './types';

export const CreditCardStack16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="CreditCardStack16"
      {...props}
    >
      <path
        d="M10.229 1.822c1.55 0 2.807 1.257 2.807 2.807v.05h.049c1.55 0 2.808 1.257 2.808 2.808v3.884c0 1.55-1.258 2.807-2.808 2.807H5.771c-1.55 0-2.807-1.256-2.807-2.807v-.048h-.049c-1.55 0-2.807-1.258-2.808-2.808V4.629c0-1.55 1.258-2.807 2.808-2.807h7.314zm-5.765 9.55c0 .721.586 1.306 1.307 1.306h7.314c.722 0 1.307-.585 1.308-1.307V9.037h-9.93v2.335zm4.393-1.265c.414 0 .75.336.75.75s-.336.75-.75.75H6.571c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.286zM2.915 3.322c-.722 0-1.308.585-1.308 1.307v3.886c0 .722.586 1.308 1.308 1.308h.049V7.487c0-1.55 1.257-2.808 2.807-2.808h5.765v-.05c0-.722-.586-1.307-1.307-1.307H2.915zm2.856 2.857c-.721 0-1.307.586-1.307 1.308v.05h9.929v-.05c0-.722-.586-1.308-1.308-1.308H5.771z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

CreditCardStack16.category = 'Money & Shopping';

export default CreditCardStack16;
