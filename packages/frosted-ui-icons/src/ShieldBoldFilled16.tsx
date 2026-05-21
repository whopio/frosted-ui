import * as React from 'react';
import { IconProps } from './types';

export const ShieldBoldFilled16 = ({ color = 'currentColor', ...props }: IconProps) => {
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
        d="M7.30566 1.14155C7.79828 0.952744 8.34403 0.955222 8.83496 1.14839L12.665 2.65718C13.4723 2.97505 14.0038 3.75446 14.0039 4.62202V8.84077C14.0039 10.7156 12.6417 12.1764 11.4834 13.1044C10.2737 14.0735 8.98191 14.7038 8.59375 14.8837C8.26222 15.0374 7.88378 15.0407 7.54883 14.8896C7.15564 14.7121 5.83248 14.0835 4.5918 13.1162C3.40769 12.1929 2 10.7294 2 8.84077V4.62886C2.00014 3.75457 2.53917 2.97035 3.35547 2.65718L7.30566 1.14155Z"
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
};

ShieldBoldFilled16.category = 'Security';

export default ShieldBoldFilled16;
