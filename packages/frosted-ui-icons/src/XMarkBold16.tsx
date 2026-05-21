import * as React from 'react';
import { IconProps } from './types';

export const XMarkBold16 = ({ color = 'currentColor', ...props }: IconProps) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-fui-icon="true"
      {...props}
    >
      <path
        d="M12.2929 2.29306C12.6834 1.90284 13.3165 1.90264 13.707 2.29306C14.0972 2.68349 14.0971 3.31663 13.707 3.70712L9.41399 8.00009L13.707 12.2931C14.0971 12.6836 14.0972 13.3167 13.707 13.7071C13.3165 14.0974 12.6834 14.0973 12.2929 13.7071L7.99992 9.41415L3.70695 13.7071C3.31648 14.0976 2.68343 14.0975 2.29289 13.7071C1.90237 13.3166 1.90237 12.6836 2.29289 12.2931L6.58586 8.00009L2.29289 3.70712C1.90242 3.31665 1.90252 2.68359 2.29289 2.29306C2.68343 1.90269 3.31648 1.90259 3.70695 2.29306L7.99992 6.58603L12.2929 2.29306Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

XMarkBold16.category = 'Interface General';

export default XMarkBold16;
